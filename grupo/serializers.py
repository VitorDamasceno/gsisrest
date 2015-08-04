# -*- coding: utf-8 -*-

from grupo.models import Grupo
from rest_framework import serializers

class GrupoSerializer(serializers.ModelSerializer):
    
    class Meta:
    	model = Grupo
    	fields = ('id', 'descricao',)