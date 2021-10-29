from django.db.models import fields
from rest_framework import serializers
from projects.forms import ProjectForm
from .models import Project
from drf_braces.serializers.form_serializer import FormSerializer

class ProjectSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    class Meta:
        model = Project
        fields = '__all__'

class ProjectFormSerializer(FormSerializer):
    class Meta(object):
        form = Project