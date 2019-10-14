# Generated by Django 2.2.6 on 2019-10-05 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pintecipeApp', '0002_remove_recipe_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='instruction',
            name='stepDesc',
            field=models.TextField(default='step'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recipe',
            name='notes',
            field=models.TextField(default='note'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recipe',
            name='recipeImg',
            field=models.URLField(default='img'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recipe',
            name='summary',
            field=models.TextField(default='summary'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='instruction',
            name='stepNum',
            field=models.FloatField(default=0),
        ),
    ]