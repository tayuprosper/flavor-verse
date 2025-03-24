from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase, relationship
from sqlalchemy import Integer, String, Text, ARRAY, ForeignKey
from flask_cors import CORS
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from typing import List


app = Flask(__name__)
CORS(app)
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
    ingredients: Mapped[str] = mapped_column(ARRAY(String(30)), nullable=False)

    #Relationship between recipe and user
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="savedRecipes")

@app.route('/register', methods=["POST"])
def register():
    print(request.data.print)
    user_name = request.args.get('name')
    # print(user_name)
    user_password = request.args.get("password")
    # print(user_password)
    check_name = db.session.execute(db.select(User).where(User.name==user_name)).scalar()

    if check_name:
        return jsonify({"message": "User already exists"}), 400
    else:
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
        return jsonify({"access_token": access_token}), 200

@app.route('/login', methods=["POST"])
def login():
    user_name = request.args.get("name")
    password = request.args.get("password")

    check_user = db.session.execute(db.select(User).where(User.name==user_name)).scalar()

    if not check_user:
        return jsonify({"message": "User does not exit"}), 401

    if check_user and not check_password_hash(check_user.password, password):
        return jsonify({"message": "Incorrect password"}), 401
    
    if check_user and check_password_hash(check_user.password, password):
        access_token = create_access_token(identity=user_name)
        return jsonify(access_token=access_token), 201



if __name__ == "__main__":
    app.run(debug=True)