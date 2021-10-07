from django.forms import ModelForm
from django.forms.models import model_to_dict
from .models import Project


class ProjectForm(ModelForm):
    class Meta:
        model = Project
        fields = ['title', 'featured_image', 'descriptions',
                  'demo_link', 'source_link', 'tags']
