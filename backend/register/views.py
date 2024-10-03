from django.http import JsonResponse
from .serializers import RegisterSerializer,LoginSerializer
def register(request):
    if request.method == "POST":
        form = RegisterSerializer(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Registration successful'}, status=201)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    return JsonResponse({'error': 'GET method not allowed'}, status=405)

def login (request):
    if request.method == "POST":
        form = LoginSerializer(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({"message":"Login successful"},status=201)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    return JsonResponse({'error': 'GET method not allowed'}, status=405)


