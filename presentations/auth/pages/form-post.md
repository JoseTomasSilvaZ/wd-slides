## Qué pasa cuando en un formulario cuando clickeamos en enviar?
<small class='text-xs p-2 rounded-md bg-zinc-700/20'>** Bajo su comportamiento por defecto, sin agregar JS</small>

<div class='grid grid-cols-2 text-sm gap-10'>

<p>
Cuando enviamos un formulario, hacemos una petición <kbd>HTTP</kbd> de tipo <kbd>POST</kbd> a algún endpoint.
La información será enviada hacia ese endpoint, el cual podrá interceptar la información y ejecutar las acciones correspondientes. <br/>
A través del elemento <kbd>&lt;form&gt;</kbd> es posible definir hacia dónde se envían los datos.<br/><br/>
El atributo <kbd>action</kbd> define el lugar hacia donde se envían los datos. Si no se define algún parámetro, los datos se envían a la dirección URL que contiene al formulario.<br/><br/>
El atributo <kbd>method</kbd> define qué método o verbo HTTP se utilizará en la petición. Por defecto es POST.
</p>

```html
<form action='/api/v1/auth/sign-in'>
    <div>
        <label for="email">Email</label>
        <input name="email" id="email" placeholder='your@email.com' value="" />
    </div>
    <div>
        <label for="password">Password</label>
        <input name="password" id="password" placeholder='*****' value="" />
    </div>
    <button>Sign in</button>
</form>

```

</div>