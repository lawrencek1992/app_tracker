# Don't forget that if you delete an application, you need to then also manually delete all the offers associated with it. The model structure doesn't care of this for you like it does the other logic around deleted db entries. 
# 

# DOCS:  https://www.django-rest-framework.org/api-guide/viewsets/

from rest_framework import viewsets
from app_tracker.serializers import ApplicationSerializer
from app_tracker.models import Application
from django.views.generic.base import TemplateView


class AppTrackerView(TemplateView):
    """
    Renders the frontend app for users
    React will handle routing once the app is rendered
    """

    template_name = "index.html"


class ApplicationViewSet(viewsets.ModelViewSet):
    # Ultimately you will want to protect this and not just allow accessing this endpoint for anyone but rather only allow it for logged in users, and only return their applications. Maybe also make an admin class or something for yourself to make your life easier so you can have all the permissions for all the applications. 
    
    # Maybe make an authentication mixin or something you can have this and the other viewsets inherit from. Like AuthenticationMixin or something. 
    http_method_names = ["get", "post", "patch", "delete"]
    lookup_field = "id"
    queryset = Application.objects.all().order_by("id")
    model = Application
    serializer_class = ApplicationSerializer


# class CompanyViewset


# class HiringManagerViewset


# class OfferViewset


# class RecruiterViewset


# class TodoViewset


# class UserViewset
    