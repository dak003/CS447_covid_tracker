# todo/api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from api.models import Casedata
from .serializers import CaseDataSerializer

class CaseDataApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        params = request.query_params
        if(len(params) == 0):
            cases = Casedata.objects.all()
        elif("iscounty" in params.keys()):
            cases = Casedata.objects.filter(iscounty = params['iscounty'])
        elif("countyname" in params.keys()):
            cases = Casedata.objects.filter(countyname = params['countyname'])
        serializer = CaseDataSerializer(cases, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # # 2. Create
    # def post(self, request, *args, **kwargs):
    #     '''
    #     Create the Todo with given todo data
    #     '''
    #     data = {
    #         'task': request.data.get('task'), 
    #         'completed': request.data.get('completed'), 
    #         'user': request.user.id
    #     }
    #     serializer = TodoSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)

    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)