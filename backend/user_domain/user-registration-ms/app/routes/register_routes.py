from flask import Blueprint
from app.controllers.register_controller import register_user_controller

register_bp = Blueprint('register', __name__)

@register_bp.route('/register', methods=['POST'])
def register_user():
    return register_user_controller()
