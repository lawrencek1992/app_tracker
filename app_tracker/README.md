# app_tracker

## A Django app providing the database and backend for the app_tracker application. 

### Set Up the Database
1) Start mysql: `brew services start mysql`. 
2) Source the env.sh file from the project root directory: `source env.sh`.
3) Cd to the django app and run the migrations: `cd app_tracker && python3 manage.py migrate`.

### Run the Server
1) From the Django project directory, load the fixture: `python3 manage.py loaddata GeneralTestData`. 
2) Run the server: `python3 manage.py runserver 0:8000`. 
3) You can now see the Django admin app at: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)
4) You can log into the admin app with username: "test@gmail.com", and password: "test" if you have loaded the fixture. 

The url pattern for the endpoints in this app is: [http://127.0.0.1:8000/api/[endpoint]/](http://127.0.0.1:8000/api/[endpoint]/). You can see the urls in the urls.py file. 

Instead of Django templates this project uses a React app. The frontend application needs to be run in a separate terminal session. Instructions can be found in the frontend directory.

### Database

You can inspect the database using the MySQL cli in the Django database shell:
```
python3 manage.py dbshell
```

To delete the database from the dbshell:
```
SHOW DATABASES;
DROP DATABASE app_tracker;
```

To create/re-create the database from the dbshell. Remember to apply migrations after creating the database.
```
SHOW DATABASES;
CREATE DATABASE mydatabase CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
```
