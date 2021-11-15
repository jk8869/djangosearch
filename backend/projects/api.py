from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.http import HttpResponse, request
from .models import Project
from .models import Tag
from .forms import ProjectForm
from .serializers import ProjectSerializer
from .serializers import TagSerializer
import json
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status


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
    posts_serializer = ProjectSerializer(request.data)
    if posts_serializer.is_valid():
        posts_serializer.save()   
        return JsonResponse([{'status': 200}], safe=False)
    #if request.method == 'POST':        
    #    form = ProjectForm(json.loads(request.body), request.FILES)
    #    if form.is_valid():
    #        form.save()
    #        return JsonResponse([{'status': 200}], safe=False)

    return JsonResponse([{'status': False, 'error': form.errors}], safe=False)


class ProjectView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Project.objects.all()
        serializer = ProjectSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        project_serializer = ProjectSerializer(data=request.data)
        if project_serializer.is_valid():
            project_serializer.save()
            return Response(project_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', project_serializer.errors)
            return Response(project_serializer.errors, status=status.HTTP_400_BAD_REQUEST)