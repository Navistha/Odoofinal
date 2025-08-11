from rest_framework import generics, status
from django.contrib.auth import get_user_model
from .serializers import RegisterSerializer
from rest_framework.permissions import AllowAny
from .models import EmailOTP
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import EmailOTP
from django.contrib.auth.models import User
User = get_user_model()

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer


class VerifyOTPView(APIView):
    def post(self, request):
        email = request.data.get("email")
        otp = request.data.get("otp")

        try:
            user = User.objects.get(email=email)
            email_otp = EmailOTP.objects.get(user=user)

            if email_otp.otp == otp:
                user.is_active = True
                user.save()
                email_otp.delete()
                return Response({"message": "Email verified successfully!"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)
        except (User.DoesNotExist, EmailOTP.DoesNotExist):
            return Response({"error": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)