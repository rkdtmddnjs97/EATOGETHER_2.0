# Generated by Django 4.1 on 2022-08-19 01:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('joinorders', '0002_alter_joinorder_follower_alter_joinorder_order'),
        ('menus', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='join_order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='menus', to='joinorders.joinorder'),
        ),
    ]
