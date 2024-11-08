## Podemos usar más de un middleware?
<p>YASSS, y a veces es bastante útil. Por ejemplo, si queremos hacer múltiples condicionalidades, o quizás realizar múltiples acciones.</p>
<div class='grid grid-cols-2 gap-10'>
<p>
Imaginemos que queremos mantener nuestro middleware anterior tal cual como está, para poder reutilizarlo en cualquier ruta que necesite autenticación (ya sea una ruta de admin o de cliente, ambos necesitan estar logeados).
<br/><br/>
Pero ahora queremos, por ejemplo, proteger que en nuestras rutas de admin, solo los admin puedan meterse (Esto aplica si en su app están haciendo roles, sino, tómenlo como ejemplo de cosas que pueden hacer nomás).
</p>

<div>

```javascript {all}{maxHeight:'150px'}
// middlewares/auth.js
export const isAdmin = (req, res, next) => {
    /* Vamos a utilizar este middleware luego de que se ejecute 
    el de authenticate, por lo quepodemos acceder a req.user
    (ya que authenticate) llena con la info del usuario */
    const role = req.user.token.role
    if(role === 'ADMIN'){
        next()
    } else {
        return res.send('No autorizado!')
    }
}
```
<p>
Entonces, ahora podemos usarlo en nuestras rutas de admin</p>

```javascript {all}{maxHeight:'130px'}
import authenticate, isAdmin from '../middlewares/auth.js'

router.get("/admin", [authenticate, isAdmin], (req, res) =>{
    /* Solo renderizará esto si está 
    autenticado y tiene el rol de admin */
    res.render('admin-page')
})
```
</div>
</div>