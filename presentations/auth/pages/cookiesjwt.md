## Eeeentooonceeesssss 🤓☝🏻

<p class='text-sm'>
Vamos a generar un JWT con la información del usuario, y lo enviaremos a través de la cookie.<br/>
Así la información no estará explícitamente en el navegador, pero nosotros podremos descifrarla en nuestro servidor, ya que poseemos el secret.
</p>

<p class='text-sm'>
Vamos a utilizar algunas utilidades en nuestra app de express; una para poder manejar las cookies, y otra para poder manejar los JWT.
</p>
<div class='grid grid-cols-2 gap-10'>
<div>
<h4 class='mb-3 font-semibold'>
cookie-parser
</h4>

```bash
npm install cookie-parser
```

</div>
<div>
<h4 class='mb-3 font-semibold'>
jsonwebtoken
</h4>

```bash
npm install jsonwebtoken
```
</div>
</div>