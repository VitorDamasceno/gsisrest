# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('grupo', '0004_auto_20150730_2153'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subgrupo',
            name='grupo',
        ),
        migrations.DeleteModel(
            name='SubGrupo',
        ),
    ]
