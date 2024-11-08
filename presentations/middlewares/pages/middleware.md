## Qué es un Middleware
Los middlewares son funciones que tienen acceso al objeto de request (req), al objeto de response (res), y a la función next, que permite seguir la cadena de ejecución de middlewares.

#### Qué puede hacer un Middleware?
<br/>

- Ejecutar código
- Modificar la request y response 
- Terminar el ciclo de request-response (Finalizar la petición)
- Llamar al siguiente middleware (usando next())

<div class='mt-5'>

```javascript
import authenticate from '../middlewares/auth.js'

router.get("/admin", authenticate, (req, res) =>{
    res.render('admin-page')
})
```
</div>