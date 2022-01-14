from django.urls import path
from . import views

app_name = 'airah_app' 

urlpatterns = [
    path('',views.Home.as_view()),
    path('about/',views.About.as_view(), name = 'about-us'),

]

# from django.urls import path
# from . import views

# app_name = 'john_app' 

# urlpatterns = [
#     path('',views.Home.as_view()),
#     path('momo/',views.momo),
#     path('about/',views.About.as_view()),

# ]