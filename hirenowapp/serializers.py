# api/serializers.py

from rest_framework import serializers
from .models import CV

class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = CV
        fields = ['id', 'name', 'email', 'cv', 'uploaded_at']
