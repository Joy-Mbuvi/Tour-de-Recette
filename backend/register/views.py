from django.http import JsonResponse
from .serializers import RegisterSerializer,LoginSerializer 
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def register(request):
    if request.method == "POST":
        form = RegisterSerializer(data=request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Registration successful'}, status=201)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    return JsonResponse({'error': 'GET method not allowed'}, status=405)

@csrf_exempt
def login (request):
    if request.method == "POST":
        form = LoginSerializer(data=request.POST)
        if form.is_valid():

            return JsonResponse({"message":"Login successful"},status=200)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    return JsonResponse({'error': 'GET method not allowed'}, status=405)


