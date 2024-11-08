## 🌟 Podemos usarlo donde sea necesario
<p>
Ahora para cualquier ruta que queramos proteger, basándonos en la existencia de la cookie en las peticiones, podemos reutilizar nuestro middleware de autenticación!
</p>

<div class='grid grid-cols-2 gap-10'>

```javascript

// Solo pueden usarla usuarios que hayan iniciado sesion, y por ende tienen una cookie en su navegador
app.get("/ruta1", authenticate, (req, res) => {
    res.render("ruta1")
})

// Todos los usuarios pueden usarla, ya que no tiene nuestro middleware
app.get("/ruta2", (req, res) => {
    res.render("ruta2")
})

// Solo pueden usarla usuarios que hayan iniciado sesion, y por ende tienen una cookie en su navegador
app.get("/ruta3", authenticate, (req, res) => {
    res.render("ruta3")
})

```

<p>
También podemos modificar nuestro middleware de autenticación para revisar el "Rol" de un usuario, si es que planteamos que nuestra app tenga roles, y solo queremos que algunos usuarios accedan a algunas rutas (Por ejemplo, no queremos que clientes accedan a rutas de admins). 
<br/>
Queda totalmente a discreción de ustedes, pero ya tienen un ejemplo que funciona jeje.
</p>

</div>