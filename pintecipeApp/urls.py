from rest_framework import routers
from django.urls import include, path 
from . import views
from .views import current_user, UserList

router = routers.DefaultRouter()
#router.register('user', views.UserViewSet)
router.register('recipe', views.RecipeViewSet)
#router.register('ingredient', views.IngredientViewSet)
router.register('instruction', views.InstructionViewSet)
router.register('inglist' , views.IngredientListViewSet)
#router.register('current_user', current_user)
#router.register('users', UserList.as_view)


urlpatterns = [
    path('', include(router.urls)),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]