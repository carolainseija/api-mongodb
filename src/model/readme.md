##  MODELO

- 
El Modelo: Es la representación de la información con la cual el sistema opera, por lo tanto gestiona todos los accesos a dicha información, tanto consultas como actualizaciones, implementando también los privilegios de acceso que se hayan descrito en las especificaciones de la aplicación (lógica de negocio). Envía a la 'vista/modelo' aquella parte de la información que en cada momento se le solicita para que sea mostrada (típicamente a un usuario). Las peticiones de acceso o manipulación de información llegan al 'modelo' a través del 'controlador'.

**Aqui se require MONGOOSE*
*Aca va la base de datos* *

## Codigo de ejemplo para Mongoose:

```js
//requiero mongoose
const Mongoose = require("mongoose");

//Conecto la base de datos:
mongoose.connect('URL', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'No se pudo conectar'));
db.once('open', function() {
  console.log("Coneccion exitosa");
});

```
```js
//ESQUEMA
let nameSchema = new Schema({
    name: String,
    other: Boolean
}) 

//MODELO
let nameQuQuiera = mongoose.model('nombre de mi coleccion', nameSchema, 'nombre de la base de datos');
```

```js

//fUNCIONES con Logica
const funcionX = async() => {
    const y = await z.find();
    return y;
}

//Exporto:
module.exports = {
    funcionX
}

```