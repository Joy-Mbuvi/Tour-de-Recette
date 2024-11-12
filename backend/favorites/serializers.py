from rest_framework import serializers
from .models import Favourites


class FavouritesSerializer(serializers.ModelSerializer):
 
 user=serializers.StringRelatedField()
 class Meta:
    model=Favourites
    fields=['recipe_name','recipe_id']



