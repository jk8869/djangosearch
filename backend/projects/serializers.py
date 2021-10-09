from django.db.models import fields
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    class Meta:
        model = Project
        fields = '__all__'