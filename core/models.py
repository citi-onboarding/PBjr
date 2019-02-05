from django.db import models
import os


class Evento(models.Model):
    imagem = models.ImageField(upload_to='eventos', blank=True)
    nomeEvento = models.CharField(max_length=200)
    dataEvento = models.DateField()
    descricao = models.TextField()

    class Meta:
        verbose_name = "Evento"
        verbose_name_plural = "Eventos"

    def __str__(self):
        return self.nomeEvento


class Parceiro(models.Model):
    nome = models.CharField(default="", max_length=200)
    logoEmpresa = models.ImageField(upload_to='parceiros')
    url = models.URLField(max_length=250, default="", blank=True)
    

    class Meta:
        verbose_name = "Parceiro"
        verbose_name_plural = "Parceiros"

    def __str__(self):
        return "Parceiro "+str(self.nome)


class EmpresasJuniores(models.Model):

    nome =  models.CharField(default="", max_length=200)
    logoEmpresa = models.ImageField(upload_to='empresasJuniores')
    descricaoEmpresa = models.TextField(max_length=250)
    localEmpresa = models.CharField(max_length=200)
    siteEmpresa = models.CharField(max_length=200)
    emailEmpresa = models.CharField(max_length=200)

    class Meta:
        verbose_name = "Empresa Junior"
        verbose_name_plural = "Empresas Juniores"

    def __str__(self):
        return "Empresa "+str(self.nome)

class MVV(models.Model):
    missao =  models.TextField("Missão",default="", max_length=200)
    visao = models.TextField("Visão",default="", max_length=200)
    valor_1 = models.CharField("Valor(opcional)", blank=True,
                                  max_length=40)
    valor_2 = models.CharField("Valor(opcional)", blank=True,
                                  max_length=40)
    valor_3 = models.CharField("Valor(opcional)", blank=True,
                                  max_length=40)
    valor_4 = models.CharField("Valor(opcional)", blank=True,
    max_length=40)
    valor_5 = models.CharField("Valor(opcional)", blank=True,
                                  max_length=40)
    valor_6 = models.CharField("Valor(opcional)", blank=True,
                                  max_length=40)
    
    class Meta:
        verbose_name = "Missão, Visão, Valores"
        verbose_name_plural = "Missão, Visão, Valores"

    def __str__(self):
        return "Textos de MVV"

class NossoTime(models.Model):
    nosso_time = models.TextField("Texto Nosso Time(max 374 caracteres)",default="", max_length=374)

    class Meta:
        verbose_name = "Texto Nosso Time"
        verbose_name_plural = "Texto Nosso Time"

    def __str__(self):
        return "Nosso Time"