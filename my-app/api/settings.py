from flask import Flask

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/rafaelcazuriaga/Projects/react-template/my-app/api/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False