from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import (TemplateView)

                                

class About(TemplateView):
    template_name='about/about.html'    

class Home(TemplateView):
    template_name='home/home.html' 

    