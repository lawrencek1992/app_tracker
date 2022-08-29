# app_tracker

## A Django app providing the database and backend for the app_tracker application. 

### Set Up the Database
1) Start mysql: `brew services start mysql`. 
2) Source the env.sh file: `cd .. && source env.sh`.
3) Run the migrations: `python3 manage.py migrate`.

### Run the Server
1) Source the env.sh file: `cd .. && source env.sh`.
2) Load the fixture: `cd app_tracker && python3 manage.py loaddata GeneralTestData`. 
3) Run the server: `python3 manage.py runserver 0:8000`. 
4) You can navigate to "http://127.0.0.1:8000/" in your browser to see the backend. 

### Django Admin App

