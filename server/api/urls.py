from django.urls import path
from . import views

urlpatterns = [
    path('github-contents/', views.get_github_contents, name='github_contents'),
    path('contact/', views.send_contact_email, name='contact'),
]

