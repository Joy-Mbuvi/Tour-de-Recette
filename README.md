Tour de Recette 🍲

Project Description
Tour de Recette is a recipe-sharing web application that allows users to search for recipes, register, log in, and manage their favorite recipes. The frontend is built with React, and the backend is developed using Django. It integrates the Edamam API to provide recipe data, and the backend manages user authentication and favorites.

Features
Recipe Search: Users can search for recipes from the Edamam API.
User Authentication: Users can register, log in, and log out.
Favorite Recipes: Logged-in users can add and manage their favorite recipes.
Responsive Design: Works seamlessly across devices.
Technologies Used
Frontend (React)
React: Frontend framework for building the user interface.
JavaScript (ES6+): Core language used for the frontend.
HTML & CSS: Structure and styling of the web pages.
Axios: HTTP client for making API requests to the Edamam API and Django backend.
React Router: For handling page routing on the frontend.
Backend (Django)
Django: Web framework for the backend, handling user authentication and favorites.
Django Rest Framework (DRF): Used for building RESTful APIs.
SQLite: Database for storing user data and favorites.
Pillow: Library for handling image uploads (if needed).
External API
Edamam API: Provides the recipe data for the application.
Installation Instructions
Frontend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/tour-de-recette.git
cd tour-de-recette/frontend
Install the dependencies:

bash
Copy code
npm install
Create a .env file at the root of the frontend directory and add your Edamam API key and App ID:

bash
Copy code
REACT_APP_EDAMAM_API_KEY=your_edamam_api_key
REACT_APP_EDAMAM_APP_ID=your_edamam_app_id
Start the development server:

bash
Copy code
npm start
The frontend will be available at http://localhost:3000/.

Backend Setup
Go to the backend directory:

bash
Copy code
cd ../backend
Create a virtual environment and activate it:

bash
Copy code
python3 -m venv env
source env/bin/activate  # On Windows, use 'env\Scripts\activate'
Install the dependencies:

bash
Copy code
pip install -r requirements.txt
Apply the migrations:

bash
Copy code
python manage.py makemigrations
python manage.py migrate
Create a superuser for the Django admin panel:

bash
Copy code
python manage.py createsuperuser
Run the development server:

bash
Copy code
python manage.py runserver
The backend will be available at http://127.0.0.1:8000/.

Usage
Frontend: Access http://localhost:3000/ to start using the app.

Use the search bar to find recipes.
Sign up and log in to save your favorite recipes.
Backend:

Access the admin interface at http://127.0.0.1:8000/admin/ to manage users and favorites.
Make API requests for user registration, login, and favorites management at http://127.0.0.1:8000/api/.
API Endpoints
User Authentication
POST /api/register/: Register a new user.
POST /api/login/: Log in a user.
POST /api/logout/: Log out a user.
Favorites
GET /api/favorites/: Get the list of a user's favorite recipes.
POST /api/favorites/: Add a recipe to favorites.
DELETE /api/favorites/:id/: Remove a recipe from favorites.
Screenshots
(Add relevant screenshots of your app here)

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any feature or bug fix.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Author: Joy Mumbua Mbuvi
GitHub: Joy-Mbuvi
Email: joymbuvimumbua99@gmail.com
