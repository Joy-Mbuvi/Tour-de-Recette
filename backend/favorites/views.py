from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .serializers import FavouritesSerializer
from .models import Favourites
@api_view(['POST'])
def add_to_favourites(request):      
    user = request.user.is_authenticated
    if not user:
        return Response({'error': "not authenticated"}, status=401)
    
    fave = FavouritesSerializer(data=request.data)  
    if fave.is_valid():
            fave.save()  
            return Response({'message': 'Favourite added'}, status=201)  
    else:
            return Response({'errors': fave.errors}, status=400)  

@api_view(['GET'])
def get_favourites(request):
    user=request.user.is_authenticated
    if not user:
        return Response({'error':'not authenticated'}, status=401)

    favs= Favourites.objects.filter(user=request.user)
    serializer=FavouritesSerializer(favs,many=True)
    return Response(serializer.data,status=200)

@api_view(['DELETE'])
def delete_favourites(request,recipe_name):
    user=request.user.is_authenticated
    if not user:
        return Response({'error':'not authenticated'}, status=401)

    if request.method == 'DELETE':
     try:
        faves=Favourites.objects.get(recipe_name=recipe_name,user=request.user)
        faves.delete()
        return Response({'message': 'Favourite deleted'}, status=204)  
     except Favourites.DoesNotExist:
        return Response({'error':'no favourites found'}, status=404)
    
    return Response({'error': 'Method not allowed'}, status=405) 

