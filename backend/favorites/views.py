from django.http import JsonResponse
from .serializers import FavouritesSerializer  
from .models import Favourites

def add_to_favourites(request):      
    user = request.user.is_authenticated
    if not user:
        return JsonResponse({'error': "not authenticated"}, status=401)
    
    if request.method == 'POST':
        fave = FavouritesSerializer(data=request.POST)  
        if fave.is_valid():
            fave.save()  
            return JsonResponse({'message': 'Favourite added'}, status=201)  
        else:
            return JsonResponse({'errors': fave.errors}, status=400)  

def get_favourites(request):
    user=request.user.is_authenticated
    if not user:
        return JsonResponse({'error':'not authenticated'}, status=401)

    if request.method == 'GET':
        favs= Favourites.objects.filter(user=request.user)
        serializer=FavouritesSerializer(favs,many=True)
        return JsonResponse(serializer.data,status=200,safe=False)


def delete_favourites(request,recipe_name):
    user=request.user.is_authenticated
    if not user:
        return JsonResponse({'error':'not authenticated'}, status=401)

    if request.method == 'DELETE':
     try:
        faves=Favourites.objects.get(recipe_name=recipe_name,user=request.user)
        faves.delete()
        return JsonResponse({'message': 'Favourite deleted'}, status=204)  
     except Favourites.DoesNotExist:
        return JsonResponse({'error':'no favourites found'}, status=404)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405) 

