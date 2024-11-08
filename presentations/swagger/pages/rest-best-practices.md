## Buenas prácticas en una API REST

Hay algunas buenas prácticas que es muuuy importante tener en cuenta a la ahora que desarrollemos una API.

<div class='grid grid-cols-2 gap-16'>

<div class='flex flex-col gap-10'>

<div>

#### No utilizar verbos en los endpoints

```javascript

❌ router.post('/productos/crear')
❌ router.post('/crear/productos')
✅ router.post('/productos')

```

</div>

<div>

#### Envío de información a través de JSON

```javascript

res.status(400).json({
    message: 'Bad request'
})

res.status(201).json({
    product: newProduct,
    message: 'Product created.'
})

```

</div>

</div>
<div>

#### Utilizar HTTP Status Codes

```javascript
///...

res.status(500).json({
    message: 'Whoops! Something went wrong, please try again later.'
})

res.status(201).json({
    products: arrayOfProducts,
    message: 'Products created.'
})

///...

```

</div>




</div>