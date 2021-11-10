from django.db.models import fields
from rest_framework import serializers
from projects.forms import ProjectForm
from .models import Project, Tag
from drf_braces.serializers.form_serializer import FormSerializer

class ProjectSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    class Meta:
        model = Project
        fields = '__all__'

class ProjectFormSerializer(FormSerializer):
    class Meta(object):
        form = ProjectForm

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'