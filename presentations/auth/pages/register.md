## Calmaçao
<p class='text-sm'>
Dado que haremos un inicio de sesión, debemos tener un registro. <br/>
Por ello, es necesario que encriptemos las contraseñas de los usuarios, dado que guardarlas como texto plano es peligroso. <br/>
Para ello, utilizaremos otra utilidad llamada <strong>bcrypt</strong>. <br/>
Básicamente, a la hora de que un usuario se registre, guardaremos todos sus datos, pero encriptaremos su contraseña utilizando bcrypt para poder protegerla. <br/>
</p>
<p class='text-sm'>
Bcrypt es un tipo de algoritmo criptográfico que utiliza un mecanismo de "salting" y un factor de costo ajustable. Este "salting" añade datos aleatorios a la contraseña antes de realizar el hash, lo que asegura que cada contraseña tenga un hash único, incluso si dos usuarios tienen la misma contraseña.
</p>

<div class='absolute right-10 top-10 '>
```bash
npm install bcrypt
```
</div>