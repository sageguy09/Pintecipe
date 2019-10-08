from rest_framework import routers
from django.urls import include, path 
from . import views

router = routers.DefaultRouter()
router.register('user', views.UserViewSet)
router.register('recipe', views.RecipeViewSet)
#router.register('ingredient', views.IngredientViewSet)
router.register('instruction', views.InstructionViewSet)
router.register('inglist' , views.IngredientListViewSet)


urlpatterns = [
    path('', include(router.urls))
]