from django.db import models
from register.models import User


class Favourites(models.Model):
    user= models.ForeignKey(User,on_delete=models.CASCADE)
    recipe_name=models.CharField(max_length=255)
    recipe_id=models.CharField(max_length=255)
    added_on=models.DateTimeField(auto_now_add=True)

def __str__(self):
    return f'{self.recipe_name} favorited by {self.user.username}'

class CookingTips(models.Model):
    tip=models.CharField(max_length=255)
    category=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
