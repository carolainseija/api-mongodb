## CONTROLADOR

-

 *se podría decir que el 'controlador' hace de intermediario entre la 'vista/Routas' y el 'modelo' .*

Contiene el código necesario para responder a las acciones que se solicitan en la aplicación.

En realidad es una capa que sirve de enlace entre las vistas y los modelos, respondiendo a los mecanismos que puedan requerirse para implementar las necesidades de nuestra aplicación. Sin embargo, su responsabilidad NO es manipular directamente datos, ni mostrar ningún tipo de salida, sino servir de enlace entre los modelos y las vistas para implementar las diversas necesidades del desarrollo.
*Aqui require el modelo en forma de constante*
*Logica de negocio*

##### Codigo de ejemplo:

```js
const namebaseDeDatos = require('./model/namedeBaseDeDatos');
```
```js
 const x = async() => {
     //aca llamo a la funcion que quiero dentro de mi base de datos o dentro de "models"
    return await namebaseDeDatos.funcionQueTengoEnBasedeDatos();
}
```
