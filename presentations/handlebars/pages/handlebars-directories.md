## Carpetas necesarias
Dado que queremos reutilizar código, handlebars nos permite declarar layouts, partials y páginas.

<div class="flex gap-10">

<div class="w-2/3">

Este es un ejemplo de cómo podemos estructurar nuestro proyecto a la hora de usar Handlebars
```bash {5-7|9-10|11-13|14-15|all}
.
├── index.js
├── package-lock.json
├── package.json
├── public
│   └── styles
│       └── index.css
├── readme.md
├── routes
│   └── champions.routes.js
└── views
    ├── champion.handlebars
    ├── champions.handlebars
    └── layouts
        └── main.handlebars

```
</div>

<div class="w-1/3 text-sm">

- views: Acá guardaremos las páginas de nuestra aplicación
  
- views/layouts: Acá guardaremos los layouts de nuestra aplicación. Nos ayudarán a poder repetir un mismo estilo o estructura en las páginas que lo necesitemos, sin necesidad de escribir el mismo código una y otra vez.

- views/partials: Acá guardaremos pequeños componentes que podamos reutilizar a lo largo de nuestra interfaz
</div>
</div>