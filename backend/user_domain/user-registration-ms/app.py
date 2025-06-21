from flask import Flask
from app.extensions import db, ma
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()



def create_app():
    app = Flask(__name__)

    # Configure database
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize extensions with the app
    db.init_app(app)
    ma.init_app(app)

    # Record routes
    from app.routes.register_routes import register_bp
    app.register_blueprint(register_bp, url_prefix='/api')

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5001)
