from django.contrib import admin
from .models import MigrationJob, CodeMapping

admin.site.register(MigrationJob)
admin.site.register(CodeMapping)
