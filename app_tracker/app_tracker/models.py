from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from djmoney.models.fields import MoneyField
from phonenumber_field.modelfields import PhoneNumberField
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Application(models.Model):
    company = models.ForeignKey(
        "Company", 
        null=False, 
        db_index=True, 
        on_delete=models.PROTECT,
        related_name="application",
    )
    date_applied = models.DateField(null=True)
    first_interview = models.DateField(null=True, default=None)
    hiring_manager = models.ForeignKey(
        to="HiringManager", 
        null=True, 
        on_delete=models.PROTECT,
        related_name="application",
    )
    job_description = models.CharField(
        null=False, 
        unique=False, 
        max_length=64,
    )
    notes = models.CharField(null=True, blank=False, max_length=250)
    offer_extended = models.BooleanField(default=False)
    recruiter = models.ForeignKey(
        to="Recruiter", 
        null=True, 
        on_delete=models.PROTECT,
        related_name="application",
        db_index=True,
    )
    second_interview = models.DateField(null=True, default=None)
    user = models.ForeignKey(
        to="User", 
        null=False,
        db_index=True,
        related_name="application", 
        on_delete=models.PROTECT, 
    )
    
class Company(models.Model):
    hiring_manager = models.OneToOneField(
        to="HiringManager",
        null=True, 
        related_name="company", 
        on_delete=models.CASCADE
    )
    name = models.CharField(
        null=False, unique=True, db_index=True, max_length=32,
    )
    recruiter = models.ForeignKey(
        to="Recruiter",
        null=True, 
        related_name="company", 
        db_index=True, 
        on_delete=models.SET_NULL
    )
    website = models.CharField(null=True, max_length=250)
    
class HiringManager(models.Model):
    email = models.EmailField(null=True, unique=True)
    name = models.CharField(
        null=False, max_length=32, db_index=True, unique=True
    )
    phone_number = PhoneNumberField(null=True, unique=True, db_index=True)

class Offer(models.Model):
    class OffersTypeChoices(models.TextChoices):
        CONTRACT = "Contract"
        CONTRACT_TO_HIRE = "Contract to Hire"
        FULL_TIME = "Full Time"
        PART_TIME = "Part Time"
        
    application = models.ForeignKey(
        to=Application, 
        related_name="offer", 
        null=True, 
        on_delete=models.PROTECT,
    )
    company = models.ForeignKey(
        to="Company", 
        null=True, 
        db_index=True, 
        on_delete=models.PROTECT,
    )
    date_offered = models.DateField(null=False)
    dental = models.BooleanField(default=False)
    healthcare = models.BooleanField(default=False)
    length = models.CharField(null=True, blank=False, max_length=64)
    notes = models.CharField(null=True, blank=False, max_length=250)
    pto = models.CharField(null=True, blank=False, max_length=64)
    recuiter = models.ForeignKey(
        to="Recruiter", 
        null=True, 
        related_name="offer",
        on_delete=models.PROTECT,
    )
    retirement = models.BooleanField(default=False)
    salary = MoneyField(
        max_digits=14, decimal_places=2, default_currency="USD", null=True
    )
    schedule = models.CharField(null=True, max_length=250)
    type = models.CharField(
        null=True, 
        default=OffersTypeChoices.FULL_TIME, 
        choices=OffersTypeChoices.choices, 
        max_length=32
    )
    user = models.ForeignKey(
        to="User", related_name="offer", on_delete=models.PROTECT, null=False
    )
    vision = models.BooleanField(default=False)


class Recruiter(models.Model):
    email=models.EmailField(null=True, unique=True)
    name = models.CharField(
        null=False, max_length=32, db_index=True, unique=True
    )
    phone_number = PhoneNumberField(null=True, unique=True, db_index=True)
    

class Todo(models.Model):
    completed = models.BooleanField(default=False)
    date_created = models.DateField(null=False)
    name = models.CharField(
        null=False, unique=True, max_length=64, db_index=True
    )
    notes = models.CharField(
        null=True, max_length=450,
    )
    user = models.ForeignKey(
        to="User", 
        related_name="todos", 
        on_delete=models.PROTECT, 
        null=False,
        db_index=True
    )
    
class User(AbstractUser):
    # customizable if needed
    pass
    