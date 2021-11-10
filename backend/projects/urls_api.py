from django.urls import path
from . import api

urlpatterns = [
    path('projects/', api.projects, name="projects"),    
    path('tags/', api.tags, name='tags'),
]
