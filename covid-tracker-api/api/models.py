# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Casedata(models.Model):
    idcasedata = models.IntegerField(db_column='idCaseData', blank=True, primary_key=True)  # Field name made lowercase.
    stateid = models.IntegerField(db_column='StateID', blank=True, null=True)  # Field name made lowercase.
    fips = models.TextField(blank=True, null=True)
    iscounty = models.IntegerField(db_column='isCounty', blank=True, null=True)  # Field name made lowercase.
    countyname = models.TextField(db_column='countyName', blank=True, null=True)  # Field name made lowercase.
    stateabvr = models.TextField(db_column='stateAbvr', blank=True, null=True)  # Field name made lowercase.
    casesconfirmed = models.IntegerField(db_column='casesConfirmed', blank=True, null=True)  # Field name made lowercase.
    casesprobable = models.IntegerField(db_column='casesProbable', blank=True, null=True)  # Field name made lowercase.
    deathsconfirmed = models.IntegerField(db_column='deathsConfirmed', blank=True, null=True)  # Field name made lowercase.
    deathsprobable = models.IntegerField(db_column='deathsProbable', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CaseData'


# class Counties(models.Model):
#     countyname = models.CharField(db_column='countyName', unique=True, max_length=40)  # Field name made lowercase.
#     latitude = models.FloatField()
#     longitude = models.FloatField()

#     class Meta:
#         managed = False
#         db_table = 'Counties'


# class States(models.Model):
#     stateid = models.IntegerField(db_column='StateID', blank=True, null=True)  # Field name made lowercase.
#     statename = models.TextField(db_column='stateName', blank=True, null=True)  # Field name made lowercase.

#     class Meta:
#         managed = False
#         db_table = 'States'
