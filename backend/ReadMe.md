
# JustClimate Django Project

Welcome to the JustClimate Django project! This project aims to [provide a brief description of the project].

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Python (>=3.6)
- pip (Python package installer)

## Getting Started

Follow these steps to set up and run the JustClimate Django project locally:

1. **Clone the Repository:**
   I guess you know how to do that 
Create a Virtual Environment:


python -m venv venv
Activate the Virtual Environment:

On Windows:


.\venv\Scripts\activate
On macOS/Linux:


source venv/bin/activate
Install Dependencies:


pip install -r requirements.txt
Run Migrations:
python manage.py makemigrations
python manage.py migrate
Create Superuser (Optional):

If you want to access the Django admin interface, create a superuser:


python manage.py createsuperuser
Follow the prompts to create a superuser account.

Run the Development Server:

python manage.py runserver
The project will be accessible at http://127.0.0.1:8000/.

Access the Admin Interface (Optional):

If you created a superuser, access the Django admin interface at http://127.0.0.1:8000/admin/.

Contributing
If you'd like to contribute to the project, please follow our contribution guidelines.

License
This project is licensed under the MIT License.
