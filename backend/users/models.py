from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import User
import uuid

class User(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username


class EmailOTP(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"OTP for {self.user.username}"
