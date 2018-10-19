from flask import Flask, jsonify, request, Response
import json
from GameModel import *
from settings import *


#validation
def validGameObject(gameObject):
  if ("title" in gameObject 
        and "year" in gameObject 
          and "console" in gameObject
            and "id" in gameObject):
      return True
  else:
      return False


#GET /games
@app.route('/games')
def get_games():
  return jsonify({'games': Game.get_all_games()})

#GET /games/id
@app.route('/games/<int:id>')
def get_game_by_id(id):
  return_value = Game.get_game(id)
  return jsonify(return_value)

#POST /games

@app.route('/games', methods=['POST'])
def add_game():
  request_data = request.get_json()
  if(validGameObject(request_data)):
    Game.add_game(request_data['title'], request_data['year'], request_data['console'])
    response = Response("",201,mimetype='application/json')
    response.headers['Location'] = "/games/"+str(new_game['id'])
    return response
  else:
    invalidGameObjectErrorMessage = {
      "error": "invalid gme passed in request",
      "helpStr": "expected object like {'title': 'title'...}"
    }
    response = Response(json.dumps(invalidGameObjectErrorMessage), status=404, mimetype='application/json');
    return response

  return jsonify()


@app.route('/games/<int:id>', methods=['PUT'])
def replace_game(id):
  request_data = request.get_json()
  Game.replace_game(request_data['title'], request_data['year'], request_data['console'] )
  new_game = {
    "title": request_data['title'],
    "console": request_data['console'],
    "year": request_data['year'],
    "id": id
  }
  i = 0;
  for game in games:
    currentId = game['id']
    if currentId == id:
      games[i] = new_game
    i += 1
  response = Response("", status=204)

  return response

@app.route('/games/<int:id>', methods=['PATCH'])
def update_game(id):
  request_data = request.get_json() 
  updated_game = {}
  if("title" in request_data):
    Game.update_title(id, request_data["title"])
  if("console" in request_data):
    Game.update_title(id, request_data["console"])
  if("year" in request_data):
    updated_game["year"] = request_data["year"]

  response = Response("", status=204)
  response.headers['Location'] = "/books/" + str(id)
  
  return response


@app.route('/games/<int:id>', methods=['DELETE'])
def delete_game(id):
  if(Game.delete_game(id)):
    response = Response("", status=204)
    return response

  invalidGameObjectErrorMessage = {
      "error": "invalid game ID passed in request"
    }
  response = Response(invalidGameObjectErrorMessage, status=404, mimetype='application/json')
  return response

app.run(port=5000)  