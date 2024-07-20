# Create your views here.
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


def index(request):
    response_data = {
        "status": "UP",
        "message": "Service is running smoothly."
    }
    return JsonResponse(response_data)

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, My world!'})


