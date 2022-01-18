from django.urls import path
from . import views

app_name = 'customer_app'

urlpatterns = [
    #call templates
    path('',views.Home.as_view()),
    path('about/',views.About.as_view(), name = 'about'),
    path('order/',views.Order.as_view(), name = 'order'),
    path('promo/',views.Promo.as_view(), name = 'promo'),
    

]