"""app_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from app_tracker.views import (
    AppTrackerView,
    ApplicationViewSet,
    # CompanyViewSet,
    # HiringManagerViewSet,
    # OfferViewSet,
    # RecruiterViewSet,
    # TodoViewSet,
    # UserViewSet,
)
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import routers

router = routers.SimpleRouter()

router.register(r"applications", ApplicationViewSet, "applications")
# router.register(r"companies", CompanyViewSet, "companies")
# router.register(r"hiring-managers", HiringManagerViewSet, "hiring-managers")
# router.register(r"offers", OfferViewSet, "offers")
# router.register(r"recruiters", RecruiterViewSet, "recruiters")
# router.register(r"todos", TodoViewSet, "todos")
# 
# Does this go here? Or do you do something different with it down in urlpatterns. I think if you want to use it with Django's authentication (you do), you need to do something special with it. 
# router.register(r"users", UserViewSet, "users")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include((router.urls, "api"))),
    re_path(r"^(?P<path>.*)/$", AppTrackerView.as_view()),
    path("", AppTrackerView.as_view()),
]
