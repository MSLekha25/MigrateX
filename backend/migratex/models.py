from django.db import models


class MigrationJob(models.Model):
    source_code = models.TextField()
    source_language = models.CharField(max_length=50)
    target_language = models.CharField(max_length=50)
    migrated_code = models.TextField(blank=True, null=True)
    migration_guide = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, default='pending')  # pending, completed, failed
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class CodeMapping(models.Model):
    migration_job = models.ForeignKey(MigrationJob, on_delete=models.CASCADE, related_name='mappings')
    original_snippet = models.TextField()
    migrated_snippet = models.TextField()
    notes = models.TextField(blank=True, null=True)
