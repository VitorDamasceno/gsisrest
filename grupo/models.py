from django.db import models


class Grupo(models.Model):

	descricao = models.CharField(max_length=200, unique=True)


	def __unicode__(self):
		return self.descricao

	def save(self, *args, **kwargs):
		self.descricao = self.descricao.upper()
		super(Grupo, self).save(*args, **kwargs)


# class SubGrupo(models.Model): 
	
# 	nome = models.CharField(blank=False, max_length=200)
	
# 	grupo = models.ForeignKey(Grupo, related_name="sub_grupos")

# 	def __unicode__(self):
# 		return self.nome