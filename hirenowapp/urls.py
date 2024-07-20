from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('hello-world/', views.hello_world, name='hello_world'),
]