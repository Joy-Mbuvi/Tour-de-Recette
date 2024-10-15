

from django.urls import path
from .views import get_tips,new_cooking_tips

urlpatterns =[
    path('',get_tips,name='tips'),
    path('new/',new_cooking_tips,name='new_tips')
]