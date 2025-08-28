from django.db import models
from register.models import User


class Favourites(models.Model):
    recipe_title=models.CharField(max_length=255)
    recipe_id=models.CharField(max_length=255)
def __str__(self):
    return f'{self.recipe_name} favorited by {self.user.username}'

