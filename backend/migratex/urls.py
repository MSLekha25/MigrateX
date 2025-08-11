from django.urls import path
from .views import (
    MigrationJobListCreateView,
    TriggerMigrationView,
    CodeMappingListView,
    home,
    migrate_code,
)

urlpatterns = [
    path('migrate/', migrate_code, name='migrate_code'),
    path('', home, name='home'),
    path('jobs/', MigrationJobListCreateView.as_view(), name='migration_job_list_create'),
    path('jobs/<int:migration_job_id>/mappings/', CodeMappingListView.as_view(), name='code_mapping_list'),
    path('jobs/<int:migration_job_id>/trigger/', TriggerMigrationView.as_view(), name='trigger_migration'),
]