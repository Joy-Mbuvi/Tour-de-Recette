from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
#we are going to create a class that will inherite our usercreationform and add new fields to it

class RegisterSerializer(serializers.ModelSerializer):
    email=serializers.EmailField(required= True)
    password2= serializers.CharField(style={'input_type':'password'},write_only=True)

    class Meta: #define that the registerform will be saved in the user database
        model=User
        fields=["username","email","password","password2"]

    def validate(self,data):
        if data ['password'] != data['password2']:
            raise serializers.ValidationError({"password":"Passwords do not match"})
        return data
    
    def create(self,validated_data):
        user= User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password= serializers.CharField(style={'input_type':'password'},write_only=True)

    def validate(self,data):
        username=data.get('username')
        password=data.get('password')

        user=authenticate(username=username,password=password)
        if not user:
            return serializers.ValidationError("Wrong Login Credentials")
        
        return user
