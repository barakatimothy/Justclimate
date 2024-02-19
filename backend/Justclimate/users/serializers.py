from rest_framework import serializers
from .models import UserData


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserData
        fields = ["id", "email", "name", "password",  "Mobile_No"]
        read_only_fields = ('conference_code',)  # Ensure conference_code is read-only


    def create(self, validated_data):
        user = UserData.objects.create(
            email=validated_data['email'],
            name=validated_data['name'],
            Mobile_No=validated_data.get('Mobile_No', '')  # Set Mobile_No with default value
        )
        user.set_password(validated_data['password'])
        user.save()
        return user