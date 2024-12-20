from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_favourites, name='favourites'),  
    path('add/', views.add_to_favourites, name='add_favourite'), 
    path('delete/', views.delete_favourites, name='delete_favourite'),
]
