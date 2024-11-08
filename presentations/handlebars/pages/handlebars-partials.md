## Utilizando partials para reutilizar código

<div class="text-sm flex gap-10">

<div class="w-1/2" >
<p>
Tenemos un componente de navegación, que queremos compartir entre varias páginas de nuestra aplicación:
</p>

```javascript
// views/partials/navigation.handlebars
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/videos">Videos</a></li>
    <li><a href="/images">Images</a></li>
    <li><a href="/social">Social</a></li>
</ul>

```
<br/>

```bash {all}{maxHeight:'200px', lines:false}
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
    ├── layouts
    │   └── main.handlebars
    └── partials
        └── navigation.handlebars

```

</div>

<div class="w-1/2">
<p>Entonces, si quisieramos utilizarlo en nuestro layout, para compartirlo entre todas las páginas que lo utilicen:</p>

```javascript
//views/layouts/main.handlebars

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
    {{> navigation}}
    {{{body}}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>


```
</div>

</div>