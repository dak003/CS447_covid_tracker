# api/api/serializers.py
from rest_framework import serializers
from api.models import Casedata
from api.models import Counties
from api.models import States
from api.models import vacData

class CaseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casedata
        fields = ["idcasedata", "stateid", "fips", "iscounty", "countyname", "stateabvr", "casesconfirmed", "casesprobable", "deathsconfirmed", "deathsprobable"]


class CountyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counties
        fields = ["countyname", "latitude", "longitude", "fips", "state"]


class StateDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = States
        fields = ["stateid", "statename", "abrv"]


class VacDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = vacData
        fields = ["stateid", "statename", "vacdelivered", "vacadministered", "numberanydose", "numberfullyvac"]