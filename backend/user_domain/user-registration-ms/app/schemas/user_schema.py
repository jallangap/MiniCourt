from app.models.user_model import User
from app import ma

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        exclude = ['password']  # opcional, para no devolver la contraseña

user_schema = UserSchema()