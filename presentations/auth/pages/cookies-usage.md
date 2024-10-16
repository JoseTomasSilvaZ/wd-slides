## Para qué usaremos cookies?
<p class='text-sm'>
Las utilizaremos para reconocer a los usuarios que hagan solicitudes a la API. Además de proveer seguridad a esta, denegando las solicitudes de usuarios que no tengan cookies. <br/>
Entonces, las cookies nos permitirán:
</p>

<div class="text-sm">

- Identificar a los usuarios a través de la cookie
  - Una vez que un usuario inicie sesión, el servidor enviará una cookie a su navegador con cierta información del usuario. Luego las peticiones que este haga al servidor, contendrán la cookie.
  - Pero guardar directamente información del usuario en una cookie es peligroso. Entonces qué podemos hacer? :O
  - ☝🏻 Para resolver este misterio, siguiente slide.
- Proteger nuestra aplicación ante usuarios no autenticados. 
  - Si no tiene cookie, o si esta está expirada, o no es válida, no puede interactuar.
</div>