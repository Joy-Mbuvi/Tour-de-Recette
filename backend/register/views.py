from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

@api_view(['POST'])
def register(request):
    form = RegisterSerializer(data=request.data)
    if form.is_valid():
        form.save()
        return Response({'message': 'Registration successful'}, status=201)
    else:
        return Response({'errors': form.errors}, status=400)

@api_view(['POST'])
def login(request):
    form = LoginSerializer(data=request.data)
    if form.is_valid():
        user = form.validated_data['user']
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }, status=200)
    else:
        return Response({'errors': form.errors}, status=400)
