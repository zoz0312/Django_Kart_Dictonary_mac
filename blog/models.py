from django.db import models

# Create your models here.
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Kartbody(models.Model):
    author = models.ForeignKey('auth.User')
    name = models.CharField(max_length=30)
    level = models.CharField(max_length=10)
    simple_text = models.TextField()
    ability_text = models.TextField()
    histpry_text = models.TextField()
    body_img = models.ImageField(upload_to="images/",max_length=100, null=True)
    ability_img = models.ImageField(upload_to="images/",max_length=100, null=True)

    def __str__(self):
        return self.name
