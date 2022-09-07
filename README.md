# app_tracker

## A web application to track application and offers in the job search process. The frontend is a React app, and the backend is a Django app. 


### Virtual Environment
After downloading a local copy of the project, create a virtual environment for the project. My environment is called "app_tracker", and that is the name all of the following commands use. You may use any name you wish:
1) Install virtualenv/virtualendwrapper: 
[https://virtualenvwrapper.readthedocs.io/en/latest/](https://virtualenvwrapper.readthedocs.io/en/latest/)
2) Make the virutal environment: `mkvirtualenv app_tracker`

Creating the environment will also activate it. You can deactivate it with `deactivate` and reactivate it with `workon app_tracker`.

### Install dependencies

```
(app_tracker) $ python3 -m pip install -r app_tracker/requirements.txt
```

### Update Python Paths

And add the root project directory to your `PYTHONPATH`:

```
(app_tracker) $ export PYTHONPATH=$PYTHONPATH:/[path to local copy of project directory]
```

The following line should also be added to the bottom of your ~/.bashrc file or ~/.zshrc file:

```
(app_tracker) $ export PATH=$PATH:/[path to local copy of project directory]
```
