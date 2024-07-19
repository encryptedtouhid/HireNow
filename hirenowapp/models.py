from django.db import models

# Create your models here.


# api/models.py

from django.db import models

class CV(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    cv = models.FileField(upload_to='cvs/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
