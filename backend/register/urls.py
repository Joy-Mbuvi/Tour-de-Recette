
from django.urls import path
from .views import register, CustomTokenObtainPairView

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
