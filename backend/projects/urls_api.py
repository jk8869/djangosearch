from django.urls import path
from . import api

urlpatterns = [
    path('projects/', api.projects, name="projects"),    
    path('tags/', api.tags, name='tags'),
    path('create-project/', api.createProject, name='create-project'),
]
