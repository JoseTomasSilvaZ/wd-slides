## Hagamos un ejemplo de un middleware
<div class='grid grid-cols-2 gap-10 mt-4'>
<p>
Basémonos en la slide anterior, queremos crear un middleware que podamos agregar a ciertas rutas que queramos proteger, para que sólo usuarios que tengan cierta cookie (y que esta sea válida), puedan ingresar.
<br/>
Para ello, vamos a crear nuestra carpeta <kbd>middlewares</kbd>, y agregaremos un archivo llamado <kbd>auth.js</kbd>. 
<br/> <br/>
Dentro de este archivo, desarrollaremos todos los middlewares que estimemos convenientes que estén relacionados con autenticación.

<div class='mt-5'>

```javascript
import authenticate from '../middlewares/auth.js'

router.get("/admin", authenticate, (req, res) =>{
    res.render('admin-page')
})
```

</div>
</p>

<div>
<!-- <small class='text-xs p-2 rounded-md bg-zinc-900 '>Para este ejemplo, cookie-parser y jsonwebtoken están instalados como dependencia</small> -->

```javascript {all}{maxHeight:'400px'}
// middlewares/auth.js
import jwt from 'jsonwebtoken'

export const authenticate = (req, res, next) => {
    //Recuperamos el token desde la solicitud del usuario
    const token = req.cookies.token;

    // Si no existe el token, redireccionamos al usuario al login
    if (!token) {
        return res.redirect('/auth/sign-in')
    }
    //En caso de que exista, lo verificamos con jsonwebtoken
    jwt.verify(token, "secret", (err, decoded) => {
        /* Si hubo un error al desencriptar 
        (Token invalido, expirado, u otro), redireccionamos al login */
        if (err) {
        res.redirect('/auth/sign-in')
        return;
    }
    /*Si no hubo error, se agrega a la request un parametro 'user',
    con la informacion decodificada */
    req.user = decoded;
    /* Llamamos al siguiente middleware (probablemente donde está
    nuestra lógica de renderización de la página)*/
    next();
  });
}
```

</div>
</div>