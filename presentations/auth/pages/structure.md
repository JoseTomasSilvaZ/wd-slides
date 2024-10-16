
### Estructura sugerida para su proyecto

Hasta ahora, no hemos conversado sobre cómo manejar nuestras distintas secciones del proyecto, separándolas de forma lógica para mantener el orden. Por ello, les dejo acá una estructura que podrían seguir.

```
├── db ---> acá guardaremos nuestra insancia de neon
│   └── neon.js
├── index.js
├── middlewares --> acá todos nuestros middlewares
│   └── auth.js
├── package-lock.json
├── package.json
├── pages
│   └── index.html
├── routes --> acá guardaremos todas nuestras rutas
│   ├── auth.js
│   └── profile.js
├── static --> todos nuestros archivos estáticos
│   └── style.css
└── views --> handlebars
    ├── layouts
    │   └── main.handlebars
    ├── login.handlebars
    ├── perfil.handlebars
    ├── profile.handlebars
    └── register.handlebars
```