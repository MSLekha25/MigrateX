from rest_framework import serializers
from .models import MigrationJob, CodeMapping

class MigrationJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = MigrationJob
        fields = '__all__'

class CodeMappingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeMapping
        fields = '__all__'
