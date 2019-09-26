# ddrfr-boilerplate

This boilerplate was made to connect Django, the Django Rest Framework, and React together. It uses a webpack instead of
create-react-app. I like create-react-app quite a lot, but webpack and react worked well in this situation. This boilerplate 
is based heavily on Valentino Gagliardi's setup and tutorials. His site is https://www.valentinog.com and his tutorials are
excellent. I have also learned a lot about Django from W. S. Vincent's books and blog.

I started with Django and used the following commands in terminal.

mkdir ddrfr-boilerplate && cd ddrfr-boilerplate

pipenv install django==2.2

pipenv shell

$ django-admin startproject ddrfr_boilerplate_project .

$ python manage.py startapp contactus

$ python manage.py startapp frontend

$ pipenv install djangorestframework==3.10.3

$ pipenv install whitenoise

You can run python manage.py runserver and go to 127:1.0.0.8000 and open the inspector to make sure everything is working 
since nothing might show up on the screen, but it doesn't mean it isn't working depending on where you are in the process.

I started the frontend file while in the pipenv shell and also using the same terminal window I had been using.

$ yarn init 

(then follow the prompts)

$ yarn add webpack webpack-cli --dev

$ yarn add @babel/core --dev

Adding the rest of the development dependancies from the package.json file the same manner. To add the other dependancies
the dev ending (--dev) is not needed.

$ yarn add react react-dom 

The rest to add are in the package.json file as dependancies. 

I found it helpful to run yarn audit frequently to make sure everything is working together properly.

To run the program after beginning to set up the frontend, run:

$ yarn run dev 

or 

$ yarn run build

then 

$ python manage.py runserver

I added a fair amount of styling to have styling placeholders available. Permissions are not addressed in this boilerplate,
and when logged into admin, no forms can be submitted through the home page. Permissions were not part of the scope of this
boilerplate. 

My other sites are underwaterfortunes.com and neyonajones.com
