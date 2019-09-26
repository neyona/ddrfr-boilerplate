from django.db import models


class ContactUs(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    message = models.CharField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
