# from flask import Flask, jsonify, request
 
# app = Flask(__name__)

# @app.route('/api/v1/tasks', methods=['GET'])
# def get_tasks():
#     tasks = [
#         {"id": 1, "title": "Task 1"},
#         {"id": 2, "title": "Task 2"}
#     ]
#     return jsonify({"tasks": tasks})

# @app.route('/api/v1/tasks', methods=['POST'])
# def create_task():
#     # Здесь будет код для создания задачи
 
# @app.route('/api/v1/tasks/&lt;int:task_id&gt;', methods=['PUT'])
# def update_task(task_id):
#     # Здесь будет код для обновления задачи
 
# @app.route('/api/v1/tasks/&lt;int:task_id&gt;', methods=['DELETE'])
# def delete_task(task_id):
#     # Здесь будет код для удаления задачи


# if __name__ == '__main__':
#     app.run(debug=True)
	
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from main import geting, connecting
from getpass import getpass
from mysql.connector import connect, Error
user_name = "ptah_9"

app = Flask(__name__)
cors = CORS(app, resources={r"/users": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
 
data = {
    "users": [
        {"id": 1, "name": "John"},
        {"id": 2, "name": "Jane"},
    ]
}
 
@app.route('/users/<table>', methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def get_users(table):
    return jsonify(connecting(table))










# @app.route('/users/&lt;int:user_id&gt;', methods=['GET'])
# def get_user(user_id):
#     user = next((u for u in data["users"] if u["id"] == user_id), None)
#     if user is None:
#         return "User not found", 404
#     return jsonify(user)
 
# @app.route('/users', methods=['POST'])
# def create_user():
#     user = request.get_json()
#     data["users"].append(user)
#     return jsonify(user), 201
 
# @app.route('/users/&lt;int:user_id&gt;', methods=['DELETE'])
# def delete_user(user_id):
#     user = next((u for u in data["users"] if u["id"] == user_id), None)
#     if user is None:
#         return "User not found", 404
#     data["users"].remove(user)
#     return "User deleted", 204
 
if __name__ == '__main__':
    app.run()