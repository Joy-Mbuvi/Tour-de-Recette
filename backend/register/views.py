from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer,LoginSerializer 
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
def register(request):
        form = RegisterSerializer(data=request.data)
        if form.is_valid():
            form.save()
            return Response({'message': 'Registration successful'}, status=201)
        else:
            return Response({'errors': form.errors}, status=400)

@csrf_exempt
@api_view(['POST'])
def login (request):
        form = LoginSerializer(data=request.data)
        if form.is_valid():

            return Response({"message":"Login successful"},status=200)
        else:
            return Response({'errors': form.errors}, status=400)


