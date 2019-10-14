from rest_framework import viewsets, permissions, status
from .serializers import UserSerializer,UserSerializerWithToken, RecipeSerializer, IngListSerializer, InstructionSerializer
from .models import Recipe, IngredientList, Instruction
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

# class UserViewSet(viewsets.ModelViewSet):
#         queryset            = User.objects.all()
#         serializer_class    = UserSerializer



@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecipeViewSet(viewsets.ModelViewSet):
        queryset            = Recipe.objects.all()
        serializer_class    = RecipeSerializer

# class IngredientViewSet(viewsets.ModelViewSet):
#         queryset            = Ingredient.objects.all()
#         serializer_class    = IngredientSerializer

class InstructionViewSet(viewsets.ModelViewSet):
        queryset            = Instruction.objects.all()
        serializer_class    = InstructionSerializer

class IngredientListViewSet(viewsets.ModelViewSet):
        queryset            = IngredientList.objects.all()
        serializer_class    = IngListSerializer

