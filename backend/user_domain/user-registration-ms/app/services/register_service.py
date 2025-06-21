from app.models.user_model import User, db
from app.utils.password_utils import hash_password

def create_user(data):
    hashed_password = hash_password(data['password'])

    new_user = User(
        name=data['name'],
        email=data['email'],
        password=hashed_password,
        role=data.get('role', 'user')
    )

    db.session.add(new_user)
    db.session.commit()
    return new_user
