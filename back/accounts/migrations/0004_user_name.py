# Generated by Django 4.1 on 2022-08-16 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_user_img_user_social_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(default='user', max_length=10),
        ),
    ]
