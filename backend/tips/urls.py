

from django.urls import path
from . import views



[
   path('tips/',views.get_tips,name='tips'),
    path('tips/new/',views.new_cooking_tips,name='new_tips') 
]