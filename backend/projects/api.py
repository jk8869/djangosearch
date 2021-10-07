from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.http import HttpResponse, request
from .models import Project
from .forms import ProjectForm
from .serializers import ProjectSerializer


def projects(request):
    snippets = Project.objects.all()
    serializer = ProjectSerializer(snippets, many=True)
    return JsonResponse(serializer.data, safe=False)
