from django.db import models

class Toy(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    release_date = models.DateField()
    toy_category = models.CharField(max_length=50)
    was_included_in_home = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('name',)
    
    def __str__(self):
        return self.name
