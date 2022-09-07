# DOCS: https://www.django-rest-framework.org/api-guide/serializers/

from rest_framework import serializers
from app_tracker.models import (
    Application,
    Company,
    HiringManager,
    Offer,
    Recruiter,
    Todo,
)
from django.contrib.auth.models import User

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = "__all__"


# class CompanySerializer


# class HiringManagerSerializer


# class OfferSerializer


# class RecruiterSerializer


# class TodoSerializer


# class UserSerializer
