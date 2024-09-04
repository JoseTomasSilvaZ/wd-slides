
## UN POQUITO DE JS
JS es el ♥️ de nuestro proyecto, lo utilizaremos para modificar nuestro DOM, lo usaremos para hacer nuestro servidor (Express), para interactuar con nuestra DB (a través de Mongoose), entre muchas otras cosas. <br/>
Eeentonces, vamos a interiorizar algunos conceptos importantes.

<div class='grid grid-cols-2 gap-10'>

<div>

#### Arrays
Los arrays son objetos similares a una lista.
Nos permite almacenar múltiples valores

```javascript
// Este es un array de strings
const petNames = ['Niñita', 'Matilda', 'Matias']

```

También, podemos usar métodos, como <kbd>find()</kbd><br/> (hay muchos más)

```javascript
// Basándonos en el array anterior...

console.log(petNames.find(name => name === 'Matildita')) 
// ☝🏻 Eso retorna undefined

console.log(petNames.find(name => name === 'Matias')) 
// ☝🏻 Esto retorna Matias

```

</div>

<div>

#### Callbacks
Vieron que en el ejemplo del método find hay una expresión de tipo <kbd>(algo) => exp. booleana</kbd> ?

Ahí estamos definiendo un callback, una función que se ejecutará ante cierta situación. En el caso anterior, se ejecutará por cada elemento del array.

Y bueno, como pueden ver, son simplemente funciones flecha o en inglés, *arrow functions*.

</div>

</div>

<span class='side-comment'>
Pueden leer más documentación sobre todos los métodos de los arrays
haciendo click <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'>aquí</a>
</span>