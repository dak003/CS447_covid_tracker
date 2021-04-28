# api/urls.py : App urls.py
from django.conf.urls import url
from django.urls import path, include
from .views import (
    CaseDataApiView,
)

urlpatterns = [
    path('', CaseDataApiView.as_view()),
]