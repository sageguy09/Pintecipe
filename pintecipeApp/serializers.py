from rest_framework import serializers
from .models import User, Recipe, Ingredient, Instruction



class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = [
            'id', 
            'unit', 
            'name',
            'qty',
            'comment',
            'input',
            'recipe'
            ]

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = [
            'id', 
            'stepNum', 
            'stepDesc',
            'recipe'
            ]

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    instructions = InstructionSerializer(many=True, read_only=True)
    class Meta:
        model = Recipe
        fields = [
            'id', 
            'recipeName', 
            'summary',
            'notes',
            'recipeImg',
            'recipeLink',
            'cuisineType',
            'ingredients',
            'instructions',
            'user'
            ]
class UserSerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'email',
            'firstName',
            'location',
            'recipes'
            ]

