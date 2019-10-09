from rest_framework import serializers
from .models import User, Recipe, Instruction, IngredientList



# class IngredientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Ingredient
#         fields = [
#             'id', 
#             'unit', 
#             'name',
#             'qty',
#             'comment',
#             'input',
#             'recipe'
#             ]

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = [
            'id', 
            'stepNum', 
            'stepDesc',
            'recipe'
            ]
class IngListSerializer(serializers.ModelSerializer):
    class Meta:
        model = IngredientList
        fields = [
            'id', 
            'ingNum', 
            'ingDesc',
            'recipe'
            ]

class RecipeSerializer(serializers.ModelSerializer):
    # ingredients = IngredientSerializer(many=True, read_only=True)
    instructions = InstructionSerializer(many=True, read_only=True)
    ingList = IngListSerializer(many=True, read_only=True)
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
            # 'ingredients',
            'ingList',
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

