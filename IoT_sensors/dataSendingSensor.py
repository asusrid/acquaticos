from flask import Flask, request
from test import obtainNodosMealy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
  return 'Welcome to my Flask server!'

@app.route('/data', methods=['POST'])
def insert_data():
  data = request.get_json()
  # Do something with the data, such as inserting it into a database
  # ...
  print (data)
  return jsonify({'fo': 'br', 'baz': 123})

if __name__ == '__main__':
  app.run(debug=True)