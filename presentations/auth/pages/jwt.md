## Json Web Token o JWT pa los del Colo

<div class='grid grid-cols-2 gap-10 place-items-center'>

<p class='text-sm'>
JWT es un mecanismo para poder propagar entre dos partes, de forma segura, la identidad de un usuario. <br/>
Se trata de una cadena de texto que tiene 3 partes codificadas en Base64, cada una de ellas separadas por un punto. <br/> <br/>

- Parte 1 (Header): Encabezado donde se indica, el algoritmo y el tipo de token. 
- Parte 2 (Payload): Acá van los datos del usuario, privilegios, blabla.
- Parte 3 (Signature): Una firma que permitirá verificar si el token es válido.
  - ☝🏻 Dado esto, vamos a necesitar un Secret
</p>

<img  class='rounded-md' src='https://dc722jrlp2zu8.cloudfront.net/media/uploads/2019/12/04/cap3-seguridad2.png'/>

</div>