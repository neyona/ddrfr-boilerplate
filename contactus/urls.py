from django.urls import path

from . import views

urlpatterns = [
    path('api/contactus/', views.ContactUsListCreate.as_view()),
]
