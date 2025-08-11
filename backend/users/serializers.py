from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
import random
from django.core.mail import send_mail
from .models import EmailOTP

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.is_active = False  # Block login until verified
        user.save()

        # Generate OTP
        otp = str(random.randint(100000, 999999))
        EmailOTP.objects.create(user=user, otp=otp)

        # Send OTP Email
        send_mail(
            'Your OTP Code',
            f'Your OTP code is {otp}',
            'globaltrotter966@gmail.com',
            [user.email],
            fail_silently=False,
        )

        return user