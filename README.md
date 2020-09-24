# api-mongodb

 
 Repositorio de api .

API  mongoDB, usando *Express*, *MongoAtlas*, *Mongoose*.


## ¿Como usar la API?

 ---------------------------------------------------------------------
**CONTRATO**

*general*


#####Coleccion Canciones

- GET url/songs ->devuelve toda las canciones, sino hay devuelve un error.
- GET url/:nameSong -> devuelve una cancion especifica.
- POST url/addList-> agrego una cancion  a la base de datos con song en el body formato JSON.
- DELETE url/delete/:nameSong  -> eliminar una cancion.
- PUT url/listSong -> modifica una cancion.
#####Coleccion Usuarios
- GET url/users -> devuelve toda la lista de usuarios.
>>>>>>> 
*para un usuario especifico*
- POST url/:nameUser/:nameSong -> agrego una cancion a favorito.
- DELETE url/:nameUser/delete/:nameSong-> eliminar una cancion favorita.
 ---------------------------------------------------------------------
 ### Cual es la arquitectura que se uso para el codigo?
 -MVC M:model
      V:views
      C:controller
Cada carpeta tienen un *Readme.md* explicando que cosa va en cada uno, esto es para una mejor comprension del codigo.
