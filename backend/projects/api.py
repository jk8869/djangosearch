from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.http import HttpResponse, request
from .models import Project
from .models import Tag
from .forms import ProjectForm
from .serializers import ProjectSerializer
from .serializers import TagSerializer
import json


def projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return JsonResponse(serializer.data, safe=False)

def tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return JsonResponse(serializer.data, safe=False)

def createProject(request):
    form = ProjectForm() 
    title = request.POST.get('title')    
    if request.method == 'POST':        
        form = ProjectForm(json.loads(request.body), request.FILES)
        if form.is_valid():
            form.save()
            return JsonResponse([{'status': 200}], safe=False)

    return JsonResponse([{'status': False, 'error': form.errors}], safe=False)
