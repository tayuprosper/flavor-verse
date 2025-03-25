from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase, relationship
from sqlalchemy import Integer, String, Text, ForeignKey
from flask_cors import CORS
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from typing import List
import requests

app = Flask(__name__)
CORS(app)

fapshi_sandbox_url = "https://sandbox.fapshi.com"

# Setup database

class Base(DeclarativeBase):
    pass

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(model_class=Base)
db.init_app(app)
migrate = Migrate(app, db)

#setup authentication
app.config["JWT_SECRET_KEY"] = "super-secret" 
jwt = JWTManager(app)

# Database Models
class User(db.Model):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String(80), nullable=False)

    # Relationship between recipes and user
    savedRecipes = relationship("Recipe", back_populates="user")



class Recipe(db.Model):
    __tablename__ = "recipe"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(50), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    ingredients: Mapped[str] = mapped_column(Text, nullable=False)

    #Relationship between recipe and user
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="savedRecipes")

    def to_json(self):

        recipes = {}

        for column in self.__table__.columns:
            recipes[column.name] = getattr(self, column.name)
        return recipes
    
@app.route('/', methods=["GET"])
def index():
    return "<h1>Welcome to FlavorVerse</h1>"

@app.route('/register', methods=["POST"])
def register():
    user_name = request.json.get("name")
    user_password = request.json.get("password")
    check_name = db.session.execute(db.select(User).where(User.name==user_name)).scalar()

    if check_name:
        return jsonify({"message": "User already exists"}), 400
   
    with app.app_context():
        new_user = User(
            name = user_name,
            password = generate_password_hash(
                        user_password,
                        method="pbkdf2:sha256", 
                        salt_length=8
                        )
        )
        db.session.add(new_user)
        db.session.commit()

        access_token = create_access_token(identity=user_name)
        return jsonify({"access_token": access_token}), 201

@app.route('/login', methods=["POST"])
def login():
    user_name = request.json.get("name")
    password = request.json.get("password")

    with app.app_context():
        check_user = db.session.execute(db.select(User).where(User.name==user_name)).scalar()

        if not check_user:
            return jsonify({"message": "User does not exit"}), 401

        if check_user and not check_password_hash(check_user.password, password):
            return jsonify({"message": "Incorrect password"}), 401
        
        if check_user and check_password_hash(check_user.password, password):
            access_token = create_access_token(identity=user_name)
            return jsonify(access_token=access_token), 200

@app.route('/get-recipes', methods=["GET"])
def get_recipes():

    with app.app_context():
        all_recipes = db.session.execute(db.select(Recipe)).scalars.all()
        return jsonify({"recipes": [recipe.to_json() for recipe in all_recipes]}), 200


@app.route('/get-recipe/<int:recipe_id>', methods=["GET"])
def get_recipe(recipe_id):
    
    with app.app_context():
        try:
            recipe = db.get_or_404(Recipe, recipe_id)
        except:
            return jsonify({"message": "recipe not found"})
        else:
            return jsonify({"recipe": recipe.to_json()})


@app.route('/create-recipe', methods=["POST"])
@jwt_required()
def create_recipe():
    
    with app.app_context():
        new_recipe = Recipe(
            title = request.json.get("title"),
            description = request.json.get("description"),
            ingredients = request.json.get("ingredients").split(',') # All Ingredients are converted to a list of ingredients

        )

        db.session.add(new_recipe)
        db.sesssion.commit()

        return jsonify({"message": "recipe successfully created"}), 201

@app.route('/update-recipe/<int:recipe_id>', methods=["PATCH"])
@jwt_required()
def update_recipe(recipe_id):

    with app.app_context():
        recipe = db.get_or_404(Recipe, recipe_id)

        recipe.title = request.json.get("title", recipe.title)
        recipe.description = request.json.get("description", recipe.description)
        recipe.ingredients = request.json.get("ingredients", recipe.ingredients)

        db.sesssion.commit()
        return jsonify({"message": "recipe successfully updated"}), 201



@app.route('/delete-recipe/<int:recipe_id>', methods=["DELETE"])
@jwt_required()
def delete_recipe(recipe_id):

    with app.app_context():
        recipe = db.get_or_404(Recipe, recipe_id)
        db.session.delete(recipe)
        return jsonify({"message": "recipe successfully deleted"}), 201


# A search field should be added so we can search for the user and get his/her profile by name
@app.route('/user-profile', methods=["GET"])
@jwt_required()
def user_profile():

    name = request.json.get('name')
    with app.app_context():
        user = db.session.execute(db.select(User).where(User.name==name)).scalar()
        if user:
            return jsonify({"message": user.to_json()})
        else:
            return jsonify({
                "message": "user not found"
            }), 404
        


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True, port=5005)