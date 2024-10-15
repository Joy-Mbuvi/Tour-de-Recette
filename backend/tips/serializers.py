from rest_framework import serializers
from .models import CookingTips


class CookingTipSerializer(serializers.ModelSerializer):
  class Meta:
    model=CookingTips
    fields='__all__'