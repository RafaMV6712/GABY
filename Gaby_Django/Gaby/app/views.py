from django.shortcuts import render
from django.shortcuts import render_to_response
# Create your views here.


def index(request):
	template = "index.html"
	return render(request, template)

def login(request):
	template = "login.html"
	return render(request, template)

def academia(request):
	template = "academia.html"
	return render(request, template)
