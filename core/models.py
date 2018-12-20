from django.db import models
import os


class Evento(models.Model):
    imagem = models.ImageField(upload_to='eventos', blank=True)
    nomeEvento = models.CharField(max_length=200)
    dataEvento = models.DateField(blank=True, null=True)
    descricao = models.TextField()

    class Meta:
        verbose_name = "Evento"
        verbose_name_plural = "Eventos"

    def __str__(self):
        return self.nomeEvento


class Parceiro(models.Model):
    nome = models.CharField(default="", max_length=200)
    logoEmpresa = models.ImageField(upload_to='parceiros', blank=True)
    url = models.URLField(max_length=250, default="")
    

    class Meta:
        verbose_name = "Parceiro"
        verbose_name_plural = "Parceiros"

    def __str__(self):
        return "Parceiro "+str(self.nome)


class EmpresasJuniores(models.Model):

    nome =  models.CharField(default="", max_length=200)
    logoEmpresa = models.ImageField(upload_to='empresasJuniores', blank=True)
    descricaoEmpresa = models.TextField(max_length=250)
    localEmpresa = models.CharField(max_length=200)
    siteEmpresa = models.CharField(max_length=200)
    emailEmpresa = models.CharField(max_length=200)

    class Meta:
        verbose_name = "Empresa Junior"
        verbose_name_plural = "Empresas Juniores"

    def __str__(self):
        return "Empresa "+str(self.nome)
