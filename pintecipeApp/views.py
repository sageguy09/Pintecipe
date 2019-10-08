from rest_framework import viewsets
from .serializers import UserSerializer, RecipeSerializer, IngListSerializer, InstructionSerializer
from .models import User, Recipe, IngredientList, Instruction

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
        queryset            = User.objects.all()
        serializer_class    = UserSerializer

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