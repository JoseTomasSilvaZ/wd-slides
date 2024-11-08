## Handlebars syntax

<div class="flex gap-10">
<div class="w-2/3">

```javascript {all|13|all}
 /* views/layouts/main.handlebars */

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Handlebars demo</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="/styles/index.css" type="text/css">
</head>
<body>
    {{{body}}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>


```

 `body` refiere a dónde será renderizado nuestro contenido

</div>
<div class="w-1/3">

 #### Qué hacen los curly brackets?

 <p class="text-sm">
Si a la hora de renderizar nuestra página en express, le pasamos como argumentos, por ejemplo:
 </p>

``` javascript
// app.routes.js

//...
res.render("home", {firstName:"Francisco", lastName:"Galvez"})
//...
```

 <p class="text-sm">
Podríamos hacer lo siguiente:
 </p>

``` javascript
// /views/home.handlebars

<p>Hola, {{firstName}} {{lastName}}</p>

```
</div>
</div>