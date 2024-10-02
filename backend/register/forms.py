from django import forms
from django.contrib.auth import login,authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
#we are going to create a class that will inherite our usercreationform and add new fields to it

class RegisterForm(UserCreationForm):
    email=forms.EmailField()

    class Meta: #define that the registerform will be saved in the user database
        model=User
        fields=["username","email","password","password2"]


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

