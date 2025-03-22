from flask import Flask
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from flask_cors import CORS
from flask_migrate import Migrate


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


@app.route('/')
def say_hi():
    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True)