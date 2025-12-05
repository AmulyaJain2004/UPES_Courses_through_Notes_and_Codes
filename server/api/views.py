import requests
from django.conf import settings
from django.core.cache import cache
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import hashlib


@api_view(['GET'])
def get_github_contents(request):
    username = 'AmulyaJain2004'
    repo = 'UPES_Courses_through_Notes_and_Codes'
    dir_path = request.GET.get('dir_path', '')
    
    # Create cache key
    cache_key = f'github_contents_{hashlib.md5(dir_path.encode()).hexdigest()}'
    
    # Try to get from cache first (cache for 1 hour)
    cached_data = cache.get(cache_key)
    if cached_data:
        return Response(cached_data, status=status.HTTP_200_OK)
    
    api_url = f'https://api.github.com/repos/{username}/{repo}/contents/{dir_path}'
    
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'UPES-Courses-Website'
    }
    
    github_token = getattr(settings, 'GITHUB_TOKEN', None)
    if github_token:
        headers['Authorization'] = f'token {github_token}'
    
    try:
        response = requests.get(api_url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            # Cache the successful response for 1 hour
            cache.set(cache_key, data, 3600)
            return Response(data, status=status.HTTP_200_OK)
        elif response.status_code == 403:
            # Rate limit exceeded
            return Response(
                {
                    'error': 'GitHub API rate limit exceeded',
                    'message': 'Please try again later or add a GitHub token to increase rate limits',
                    'details': response.json() if response.text else 'Rate limit exceeded'
                },
                status=status.HTTP_429_TOO_MANY_REQUESTS
            )
        elif response.status_code == 404:
            return Response(
                {'error': 'Repository or path not found', 'path': dir_path},
                status=status.HTTP_404_NOT_FOUND
            )
        else:
            return Response(
                {
                    'error': 'Failed to fetch from GitHub',
                    'status_code': response.status_code,
                    'details': response.text[:500]
                },
                status=response.status_code
            )
    except requests.Timeout:
        return Response(
            {'error': 'Request timeout', 'message': 'GitHub API request timed out'},
            status=status.HTTP_504_GATEWAY_TIMEOUT
        )
    except Exception as e:
        return Response(
            {'error': 'Server error', 'details': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
def send_contact_email(request):
    """
    Handle contact form submissions and send email
    """
    try:
        # Get form data
        name = request.data.get('name', '').strip()
        email = request.data.get('email', '').strip()
        subject = request.data.get('subject', '').strip()
        message = request.data.get('message', '').strip()
        
        # Validate required fields
        if not all([name, email, subject, message]):
            return Response(
                {'error': 'All fields are required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Validate email format (basic)
        if '@' not in email or '.' not in email.split('@')[1]:
            return Response(
                {'error': 'Invalid email address'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Compose email
        email_subject = f'UPES Repository Contact: {subject}'
        email_body = f"""
New Contact Form Submission

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
This message was sent from the UPES Course Repository contact form.
"""
        
        # Send email
        try:
            send_mail(
                subject=email_subject,
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_NOTIFICATION_EMAIL],
                fail_silently=False,
            )
            
            # Send confirmation email to user
            confirmation_subject = 'Thank you for contacting UPES Repository'
            confirmation_body = f"""
Hi {name},

Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.

Your Message Summary:
Subject: {subject}
Message: {message[:100]}{'...' if len(message) > 100 else ''}

Best regards,
UPES Course Repository Team
"""
            send_mail(
                subject=confirmation_subject,
                message=confirmation_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=True,  # Don't fail if confirmation email doesn't send
            )
            
            return Response(
                {
                    'success': True,
                    'message': 'Your message has been sent successfully! We\'ll get back to you soon.'
                },
                status=status.HTTP_200_OK
            )
            
        except Exception as email_error:
            return Response(
                {
                    'error': 'Failed to send email',
                    'details': str(email_error)
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
    except Exception as e:
        return Response(
            {'error': 'Server error', 'details': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
