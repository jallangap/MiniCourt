from flask import request, jsonify
from app.models.user_model import User
from app.schemas.user_schema import user_schema
from app.services.register_service import create_user

def register_user_controller():
    data = request.get_json()

    if not all(key in data for key in ('name', 'email', 'password')):
        return jsonify({'error': 'Missing fields'}), 400

    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'User already exists'}), 409

    new_user = create_user(data)
    return user_schema.jsonify(new_user), 201
