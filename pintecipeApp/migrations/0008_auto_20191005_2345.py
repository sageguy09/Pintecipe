# Generated by Django 2.2.6 on 2019-10-05 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pintecipeApp', '0007_ingredient_inputtext'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ingredient',
            name='inputText',
        ),
        migrations.AddField(
            model_name='ingredient',
            name='ingredientInput',
            field=models.TextField(default='input from api', max_length=200),
            preserve_default=False,
        ),
    ]
