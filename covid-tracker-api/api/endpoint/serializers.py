# api/api/serializers.py
from rest_framework import serializers
from api.models import Casedata

class CaseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casedata
        fields = ["idcasedata", "stateid", "fips", "iscounty", "countyname", "stateabvr", "casesconfirmed", "casesprobable", "deathsconfirmed", "deathsprobable"]