from rest_framework import serializers
from .models import Favourites,CookingTips


class FavouritesSerializer(serializers.ModelSerializer):
 
 user=serializers.StringRelatedField()
 class Meta:
    model=Favourites
    fields=['recipe_name','recipe_id','added_on','user']



class CookingTipSerializer(serializers.ModelSerializer):
  class Meta:
    model=CookingTips
    fields=['tip','category','created_at']