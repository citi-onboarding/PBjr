# Generated by Django 2.0.9 on 2018-11-26 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evento',
            name='dataEvento',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='evento',
            name='imagem',
            field=models.ImageField(blank=True, upload_to='static/imagens/eventos'),
        ),
    ]
