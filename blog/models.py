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

class Comment(models.Model):
    post = models.ForeignKey('blog.Post', related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.text

def approved_comments(self):
    return self.comments.filter(approved_comment=True)

class Kartbody(models.Model):
    name = models.CharField(max_length=30)  #카트바디 이름
    level = models.CharField(max_length=10) #카트바디 등급 (JUI, NEW ...)
    simple_text = models.TextField()        #개발자 한줄평
    ability_text = models.TextField()       #능력치
    histpry_text = models.TextField()       #역사 배경
    body_img = models.ImageField(upload_to="images/",max_length=100, null=True)
    #카트바디 이미지
    kart_code = models.CharField(max_length=10, null=True)     #객체 코드 (한줄평에서 필요함)
    kart_type = models.CharField(max_length=10, null=True)     #아이템, 스피드
    kart_class = models.CharField(max_length=10, null=True)    #유니크, 에픽, 레어, 일반등급

    def __str__(self):
        return self.name

class Recommend(models.Model):
    user_id = models.CharField(max_length=50)       #유저 아이디
    model_code = models.CharField(max_length=10)    #객체코드
    model_type = models.CharField(max_length=10)    #아이템, 스피드, 엔진, 헨들...등등
    re_code = models.CharField(max_length=10)       #추천 타입 ( 0:비추, 1:추천 )
    text_code = models.CharField(max_length=10)     #추천하는 텍스트의 고유값

    def __str__(self):
        return self.name

class Apraisal(models.Model):
    user_id = models.CharField(max_length=50)
    model_code = models.CharField(max_length=10)    #객체코드
    text = models.TextField()
    model_type = models.CharField(max_length=10)    #아이템, 스피드, 엔진, 헨들...등등
    text_code = models.CharField(max_length=10)     #텍스트 고유값

    def __str__(self):
        return self.name













