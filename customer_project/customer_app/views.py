from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import (TemplateView)

                                
#to display
class Home(TemplateView):
    template_name='home/home.html'    

class About(TemplateView):
    template_name='about/about.html'

class Order(TemplateView):
    template_name='order/order.html'

class Promo(TemplateView):
    template_name='promo/promo.html'
