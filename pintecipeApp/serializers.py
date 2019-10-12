from rest_framework import serializers
from .models import Recipe, Instruction, IngredientList
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User


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
            'first_name',
            'recipes'
            ]

class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')