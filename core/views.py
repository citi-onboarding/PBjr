from django.shortcuts import render
from django.utils import timezone
from core.models import Evento
from datetime import date

def post_list(request):
    eventos = Evento.objects.all().order_by('dataEvento')
    datasEventos = Evento.objects.all()[0].dataEvento
    print(datasEventos)
    return render(request, 'index/index.html', {'eventos': eventos})
