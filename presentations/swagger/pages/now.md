### ¿Qué hemos hecho hasta ahora?

<div class='grid grid-cols-3 gap-16 mt-5'>
    <div class='p-3 transition-all transition-duration-400 rounded-md border border-transparent hover:border-zinc-500 group hover:bg-zinc-900 '>
    <h5> 1️⃣ HTML, CSS, JS </h5>
    <small class='block mt-3 text-sm text-zinc-400 group-hover:text-white transition-all transition-duration-400'>
        Para la entrega 1, realizamos una web estática utilizando
        HTML, CSS y JS para renderizar nuestro contenido. <br/>
        No había comunicación con recursos externos.
    </small>
    </div>
     <div class='p-3 transition-all transition-duration-400 rounded-md border border-transparent hover:border-zinc-500 group hover:bg-zinc-900 '>
    <h5> 2️⃣ Express, Handlebars </h5>
    <small class='block mt-3 text-sm hover:text-sm text-zinc-400 group-hover:text-white transition-all transition-duration-400'>
        Luego, para servir nuestra web utilizamos Express + Handlebars.
        Utilizamos Express para renderizar contenido, como también para realizar lógica tal como interactuar con la base de datos. <br/>
        Utilizamos handlebars para hacer templates, partials, layouts.
    </small>
    </div>
      <div class='p-3 transition-all transition-duration-400 rounded-md border border-transparent hover:border-zinc-500 group hover:bg-zinc-900 '>
    <h5> 3️⃣ Frontend / Backend separados </h5>
    <small class='block mt-3 text-sm hover:text-sm text-zinc-400 group-hover:text-white transition-all transition-duration-400'>
        Ahora dividiremos nuestro proyecto en dos distintos. <br/><br/>
        Nuestro frontend se encargará de servir el contenido al usuario y realizar peticiones a nuestro backend para obtener información. <br/><br/>
        El backend (seguirá siendo Express) escuchará peticiones de nuestro frontend, las procesará y enviará información bajo la arquitectura REST.
    </small>
    </div>
</div>