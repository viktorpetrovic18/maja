Maja

A simple web application built with Python, Flask, and SQLite. The project uses Flask-SQLAlchemy for database management and HTML templates for rendering web pages.

Tech Stack

* Python – Backend programming language.
* Flask – Web application framework.
* Flask-SQLAlchemy – ORM for database management.
* SQLite – Relational database.
* HTML – Frontend templates.

Features

* Flask-powered web application.
* Home page rendered using Jinja2 templates.
* SQLite database integration.
* SQLAlchemy database model for user management.
* User model with unique usernames and automatically generated primary keys.

Project Structure

maja/
│
├── app.py
├── templates/
│   └── home.html
│
└── instance/
    └── maja.db

The database file is created automatically when the database is initialized.

Database Model

The application currently includes a User model with the following fields:

Field	Type	Description
id	Integer	Primary key
username	String(80)	Unique username (required)

Getting Started

1. Clone the repository

git clone <repository-url>
cd maja

2. Install dependencies

pip install Flask Flask-SQLAlchemy

3. Initialize the database

from app import app, db
with app.app_context():
    db.create_all()

4. Run the application

python app.py

5. Open in your browser

Navigate to:

http://127.0.0.1:5000/

Current Development Status

This project is currently in its early development stage. The initial Flask application, database connection, and user model have been established.

Future development may include user registration, authentication, database operations, and additional application functionality.
