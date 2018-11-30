from django.db import models


class Evento(models.Model):
    imagem = models.ImageField(upload_to='static/imagens/eventos', blank=True)
    nomeEvento = models.CharField(max_length=200)
    dataEvento = models.DateField(blank=True, null=True)
    descricao = models.TextField()

    class Meta:
        verbose_name = "Evento"
        verbose_name = "Evento"

    def __str__(self):
        return self.nomeEvento

