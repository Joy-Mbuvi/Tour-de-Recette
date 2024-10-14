from django.contrib import admin

# Register your models here.

from .models import CookingTips

@admin.register(CookingTips)
class CookingTipAdmin(admin.ModelAdmin):
    list_display = ('tip', 'category', 'created_at')
