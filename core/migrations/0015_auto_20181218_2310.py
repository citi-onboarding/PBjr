# Generated by Django 2.1.3 on 2018-12-19 02:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_auto_20181218_2308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parceiro',
            name='logoEmpresa',
            field=models.ImageField(blank=True, upload_to='parceiros'),
        ),
    ]
