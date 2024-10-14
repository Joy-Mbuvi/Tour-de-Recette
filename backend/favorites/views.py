from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FavouritesSerializer,CookingTipSerializer 
from .models import Favourites,CookingTips

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
    return Response(serializer.data,status=200,safe=False)

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

@api_view(['GET'])
def cooking_tips(request):
    user=request.user.is_authenticated
    if not user:
        return Response({'error':'not authenticated'}, status=401)
    
    tips=CookingTips.objects.all()
    serializer=CookingTipSerializer(tips,many=True)
    return Response(serializer.data,status=200,safe=False)

@api_view(['POST'])
def new_cooking_tips(request):
    user=request.user.is_authenticated
    if not user:
        return Response({'error':'not authenticated'}, status=401)
    
    new_tip = CookingTipSerializer(data=request.data)  
    if new_tip.is_valid():
            new_tip.save()  
            return Response({'message': 'New cooking Tip added'}, status=201)  
    else:
            return Response({'errors': new_tip.errors}, status=400)  
