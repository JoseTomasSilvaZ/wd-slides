## Cómo utilizar Swagger en Express

Necesitamos instalar un par de dependencias en nuestra API de Express para poder documentarla con Swagger:

<div class='grid grid-cols-2 gap-16'>

<div>

```bash
npm install swagger-ui-express
```
<small  class='text-xs'>Para obtener la documentación a través de UI</small>
</div>


<div>

```bash
npm install swagger-jsdoc
```
<small class='text-xs'>Para documentar nuestras rutas</small>
</div>

</div>

<div class='mt-4 overflow-hidden rounded-md'>

#### Configuración en express

```js {*}{maxHeight:'300px'}
//...
import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'


// Description of API
const options = {
    definition: {
        info: {
            title: 'Some awesone RESTFUL API',
            version: '0.0.1',
            description: 'I like cats.'
        }, 
        servers: [{url:'http://localhost:3000'}],
    },
    apis: ['./routes/*.js']
}

const specs = swaggerJsdoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

```

</div>