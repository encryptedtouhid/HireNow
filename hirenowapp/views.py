from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response



def index(request):
    return render(request,'index.html')

def post(self, request, *args, **kwargs):
        serializer = CVSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})


