from rest_framework.decorators import api_view,permission_classes
from .models import CookingTips
from .serializers import CookingTipSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated




# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_tips(request):
       tips=CookingTips.objects.all()
       serializer=CookingTipSerializer(tips,many=True)
       return Response(serializer.data,status=200)
       


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_cooking_tips(request):
    new_tip = CookingTipSerializer(data=request.data)  
    if new_tip.is_valid():
            new_tip.save() 
            return Response({'message': 'New cooking Tip added'}, status=201)  
    else:
            return Response({'errors': new_tip.errors}, status=400)  
