from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import json
from settings import app

db = SQLAlchemy(app)

class Game(db.Model):
  __tablename__ = 'games'
  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(80), nullable = False)
  year = db.Column(db.Integer, nullable = False)
  console = db.Column(db.String(80), nullable = False)

  def json(self):
    return {'title': self.title, 'year': self.year, 'console': self.console}

  def add_game(_title, _year, _console,):
    new_game = Game(title=_title, year=_year, console=_console)
    db.session.add(new_game)
    db.session.commit()

  def get_all_games():
    return [Game.json(game) for game in Game.query.all()]

  def get_game(_id):
    return Game.query.filter_by(id=_id).first()

  def delete_game(_id):
    Game.query.filter_by(id=_id).delete()
    db.session.commit()

  def update_title(_id, _title):
    game_to_update = Game.query.filter_by(id=_id).first()
    game_to_update.title = _title
    db.session.commit()
    
  def update_year(_id, _year):
    game_to_update = Game.query.filter_by(id=_id).first()
    game_to_update.year = _year
    db.session.commit()

  def update_console(_id, _console):
    game_to_update = Game.query.filter_by(id=_id).first()
    game_to_update.console = _console
    db.session.commit()

  def replace_game(_id, _title, _year, _console):
    game_to_replace = Game.query.filter_by(id=_id).first()
    game_to_replace.title = _title
    game_to_replace.year = _year
    game_to_replace.console = _console
    db.session.commit()


  def __repr__(self):
    game_object = {
      'title': self.title,
      'year': self.year,
      'console': self.console
    }
    return json.dumps(game_object)

