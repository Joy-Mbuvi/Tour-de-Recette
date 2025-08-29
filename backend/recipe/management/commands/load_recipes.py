import requests
from django.core.management.base import BaseCommand
from recipe.models import Recipe  


class Command(BaseCommand):

    def handle(self, *args,**options):
        url ="https://api.edamam.com/api/recipes/v2"  
        params={
          'type':'public',
          'q':'Italian',
          'app_id':'f4c77087',
          'app_key':'46e76408ad7775ca71c7d4ff2d18e1e9',
        }
    
        response= requests.get(url,params=params)


        if response.status_code == 200: 
           data = response.json()

    
           for hit in data['hits'][:14]:  # Fixed: hit not hits
            recipe_data= hit['recipe'] # getting recipe details

            #loading recipe details into the database

            recipe,created= Recipe.objects.get_or_create(
              recipe_id = recipe_data['uri'], #the unique identifier/pk  
              defaults={
                'recipe_title': recipe_data['label'],  
                'image_url': recipe_data['image'],
                'source': recipe_data.get('source', ''),
                'source_url': recipe_data.get('url',''),
                'servings' : recipe_data.get ('yield',0), 
                'calories' : recipe_data.get('calories',0),  
                'cuisine_type' : recipe_data.get('cuisineType',[]),  
                'is_homepage_featured': True,
            }

            )
            #terminal feedback, to ensure proper loading has been done

            if created:
                self.stdout.write (f"Added :{recipe.title}")
            else:
                self.stdout.write(f"Already exists :{recipe.title}")
    
        self.stdout.write(self.style.SUCCESS('Successfully loaded recipes'))