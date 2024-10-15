from django.db import models

# Create your models here.
class CookingTips(models.Model):
    tip=models.CharField(max_length=255)

    def __str__(self):
        return self.tip