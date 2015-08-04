import json
# import django_filters

from django.db import connection

from rest_framework import permissions, viewsets, status, views, generics, filters
from grupo.models import Grupo
from grupo.serializers import GrupoSerializer
from rest_framework.decorators import detail_route, list_route
from core.pagination import CustomPagination


class GrupoListCreate(generics.ListCreateAPIView):
    serializer_class = GrupoSerializer
    queryset = Grupo.objects.all()

    filter_backends = (filters.SearchFilter, filters.OrderingFilter,)
    search_fields = ('descricao','id')
    ordering_fields = ('descricao', 'id')
    
    pagination_class = CustomPagination

    # def get_queryset(self):
        
    #     classByAsc = self.request.query_params.get('classBy')
    #     orderBy = self.request.query_params.get('orderBy')
    #     queryset = None
        
    #     if orderBy is not None:
            
    #         if classByAsc == 'desc':
    #             queryset = Grupo.objects.all().order_by('-' + orderBy)
    #         else:
    #             queryset = Grupo.objects.all().order_by(orderBy)

    #     else:                
    #         queryset = Grupo.objects.all()

    #     return queryset
    
    def perform_create(self, serializer):
        serializer.save()
    

    # def list(self, request):
    #     queryset = self.get_queryset()
    #     serializer = GrupoSerializer(queryset, many=True)
    #     return Response(serializer.data)





