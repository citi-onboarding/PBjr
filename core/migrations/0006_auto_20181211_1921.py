# Generated by Django 2.0.9 on 2018-12-11 22:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20181211_1101'),
    ]

    operations = [
        migrations.RenameField(
            model_name='parceiro',
            old_name='imagemParceiro',
            new_name='imagem',
        ),
    ]
