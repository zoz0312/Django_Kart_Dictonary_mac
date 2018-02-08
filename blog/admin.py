from django.contrib import admin

# Register your models here.
from .models import Post, Comment, Kartbody, Recommend, Appraisal

admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Kartbody)
admin.site.register(Recommend)
admin.site.register(Appraisal)