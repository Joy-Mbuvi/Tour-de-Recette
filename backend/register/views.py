from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer, LoginSerializer 
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate

@api_view(['POST'])
def register(request):
    form = RegisterSerializer(data=request.data)
    if form.is_valid():
        form.save()
        return Response({'message': 'Registration successful'}, status=201)
    else:
        return Response({'errors': form.errors}, status=400)

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = LoginSerializer

@api_view(['POST'])
def login(request):
    form = LoginSerializer(data=request.data)
    if form.is_valid():
        username = form.validated_data['username']  # Get the username
        password = form.validated_data['password']  # Get the password
        
        user = authenticate(username=username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            }, status=200)
        else:
            return Response({'error': 'Invalid credentials'}, status=400)

    return Response({'errors': form.errors}, status=400)