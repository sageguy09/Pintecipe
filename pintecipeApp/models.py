from django.db import models
from django.contrib.auth.models import User
# Create your models here.
# class User(models.Model):
#     username  = models.CharField(max_length=30)
#     email     = models.EmailField()
#     firstName = models.CharField(max_length=20)
#     location  = models.CharField(max_length=20)


class Recipe(models.Model):
    recipeName  = models.CharField(max_length=30)
    summary = models.TextField()
    notes = models.TextField()
    recipeImg = models.URLField()
    recipeLink = models.URLField()
    cuisineType = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')

# class Ingredient(models.Model):
#     unit = models.CharField(max_length=20)
#     name = models.CharField(max_length=40)
#     qty = models.CharField(max_length=10)
#     comment = models.TextField(max_length=100, blank=True)
#     input = models.TextField(max_length=200)
#     recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='ingredients')

class Instruction(models.Model):
    stepNum = models.FloatField(default=0)
    stepDesc = models.TextField()
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='instructions')

class IngredientList(models.Model):
    ingNum = models.FloatField(default=0)
    ingDesc = models.TextField()
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='ingList')

