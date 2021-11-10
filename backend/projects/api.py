from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.http import HttpResponse, request
from .models import Project
from .models import Tag
from .forms import ProjectForm
from .serializers import ProjectSerializer
from .serializers import TagSerializer


def projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return JsonResponse(serializer.data, safe=False)

def tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return JsonResponse(serializer.data, safe=False)
