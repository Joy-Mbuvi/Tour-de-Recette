from django.db import models

# Create your models here.
class Recipe(models.Model):
    recipe_id = models.CharField(max_length=255, unique=True)
    recipe_title = models.CharField(max_length=255)
    image_url = models.TextField()
    source = models.CharField(max_length=255)
    source_url = models.TextField()
    servings = models.IntegerField()
    calories = models.DecimalField(max_digits=10, decimal_places=2)
    cuisine_type = models.JSONField(default=list)
    is_homepage_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.recipe_title