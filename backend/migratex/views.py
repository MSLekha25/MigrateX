from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from .models import MigrationJob, CodeMapping
from .serializers import MigrationJobSerializer, CodeMappingSerializer

# List all migration jobs or create a new one
class MigrationJobListCreateView(generics.ListCreateAPIView):
    queryset = MigrationJob.objects.all().order_by('-created_at')
    serializer_class = MigrationJobSerializer

# Retrieve, update, or delete a specific migration job
class MigrationJobDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MigrationJob.objects.all()
    serializer_class = MigrationJobSerializer

# List code mappings for a specific migration job
class CodeMappingListView(generics.ListAPIView):
    serializer_class = CodeMappingSerializer

    def get_queryset(self):
        migration_job_id = self.kwargs['migration_job_id']
        return CodeMapping.objects.filter(migration_job_id=migration_job_id)

# Example endpoint for triggering migration (stub for AI integration)
class TriggerMigrationView(APIView):
    def post(self, request, *args, **kwargs):
        # Here you would call Azure OpenAI and update the MigrationJob
        # For now, just create a pending job
        serializer = MigrationJobSerializer(data=request.data)
        if serializer.is_valid():
            job = serializer.save(status='pending')
            # TODO: Call Azure OpenAI, update job.migrated_code and job.migration_guide
            return Response(MigrationJobSerializer(job).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def migrate_code(request):
    source_code = request.data.get("source_code", "")
    target_language = request.data.get("target_language", "")

    # Placeholder AI logic (will connect Azure OpenAI later)
    migrated_code = f"# Migrated {target_language} code\n{source_code}"

    guide = "Step 1: Understand source.\nStep 2: Translate syntax.\nStep 3: Optimize."

    return Response({
        "migrated_code": migrated_code,
        "guide": guide
    })


def home(request):
    return HttpResponse("Welcome to MigrateX!")