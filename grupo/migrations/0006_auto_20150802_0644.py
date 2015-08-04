# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('grupo', '0005_auto_20150730_2240'),
    ]

    operations = [
        migrations.RenameField(
            model_name='grupo',
            old_name='nome',
            new_name='descricao',
        ),
    ]
