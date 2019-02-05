from django.shortcuts import render

from django.utils import timezone
from core.models import *
from datetime import date

#para formulario de contato
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy, resolve
from templated_email import send_templated_mail


def post_list(request):
    eventos = Evento.objects.all().order_by('dataEvento')
    parceiros = Parceiro.objects.all()
    empresas = EmpresasJuniores.objects.all()
    mvv = MVV.objects.all()[:1]
    nossoTime = NossoTime.objects.all()[:1]
    
    return render(request, 'index/index.html', {'eventos': eventos, 'parceiros':parceiros, 'empresas':empresas, 'mvv':mvv, 'nossoTime':nossoTime})


def ContactView(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        telefone = request.POST.get('telefone')
        assunto = request.POST.get('assunto')
        email = request.POST.get('email')
        mensagem = request.POST.get('mensagem')

        #print(name)
        #print(email)
        #print(mensagem)
        send_templated_mail (
            template_name='email',
            from_email='email',
            recipient_list=['lytamrp@gmail.com'],
            context={
                'nome': nome,
                'telefone': telefone,
                'assunto': assunto,
                'email': email, 
                'mensagem': mensagem,
            }
        )
        return HttpResponseRedirect('/')
    return render(request,'index/index.html',{})
