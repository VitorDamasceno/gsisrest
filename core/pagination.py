# -*- coding: utf-8 -*-

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPagination(PageNumberPagination):

    def get_paginated_response(self, data):
        return Response(
        	{
            'count': self.page.paginator.count,
            'num_pages': self.page.paginator.num_pages,
            'page_range': self.page.paginator.page_range,
            'has_next': self.page.has_next(),
            'has_previous': self.page.has_previous(),
            'results': data
        	}
        )