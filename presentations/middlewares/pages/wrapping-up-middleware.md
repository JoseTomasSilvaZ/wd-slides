
### Eeeeeeentonceeeeess, que otro uso podemos darle?
Vimos que el middleware de autenticacion nos permitirá acceder a la información del usuario decodificada, dentro de nuestra lógica de renderizado, o lógica como tal de alguna ruta de nuestra API. <br/>

🛒 Vamos a poder identificar, y actualizar apropiadamente el carrito de un usuario, utilizando nuestro middleware
<br/>

#### Veamos un paso a paso

- 🍕 +1  - El usuario agrega algo a su carrito (peticion a nuestra API)
- 🔐 Nuestra ruta de la API está usando el middleware de autenticación (ya que no queremos que usuarios no autenticados usen esta ruta)
- 🧐 Como la ruta usa el middleware, si el usuario está autenticado, podremos acceder a la información decodificada de él a través de req.user (Dentro podría estar su id, rol, por ejemplo).
- 🤩 Ya en nuestra lógica de la ruta de la API, podemos acceder al ID del usuario, así que podemos ir a buscar su carrito y actualizarlo con el nuevo producto!

<a href='https://excalidraw.com/#json=uUL01D6qm4LjiS3_UFOfW,QpoHZlwhtpryVkrHGgdbeQ'>Aquí hay un dibujito del proceso que debemos hacer jeje</a>