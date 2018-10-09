from flask import Flask, jsonify, request, Response
import json

app = Flask(__name__)


games = [
    {
      "title": "First One",
      "year": "1999",
      "console": "PS4",
      "id": 0
    },
    {
      "title": "Second One",
      "year": "2000",
      "console": "XBOX",
      "id": 0
    }
]

#mock tests
valid_object = {
    "title": "Valid One",
    "year": "2000",
    "console": "XBOX",
    "id": 0
}

missing_title = {
    "year": "2000",
    "console": "XBOX",
    "id": 0
}

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
  return jsonify({'games': games})

#GET /games/id
@app.route('/games/<int:id>')
def get_game_by_id(id):
  return_value = {}
  for game in games:
    if game['id'] == id:
      return_value = {
        "title": game['title'],
        "year": game['year'],
        "console": game['console'],
        "id": id
      }
  return jsonify(return_value)

#POST /games

@app.route('/games', methods=['POST'])
def add_game():
  request_data = request.get_json()
  if(validGameObject(request_data)):
    new_game = {
      'title': request_data['title'],
      'console': request_data['console'],
      'year': request_data['year'],
      'id': request_data['id']
    }
    games.insert(0, new_game)
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

app.run(port=5000)