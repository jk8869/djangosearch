from django.urls import path
from . import api

urlpatterns = [
    path('', api.projects, name="projects"),    
    path('create-project/', api.createProject, name='create-project'),
]
