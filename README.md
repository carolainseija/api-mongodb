# api-mongodb

 
 Repositorio de api  👩‍💻👨‍💻.

API  mongoDB, usando *Express*, *MongoAtlas*, *Mongoose*.


## ¿Como usar la API?

 
 ---------------------------------------------------------------------
---------------------------------------------------------------------
**CONTRATO**

*general*

- GET url/-> devuelve la lista de canciones, si no hay canciones devuelve un error.

- GET url/users -> devuelve toda la lista de usuarios.

- GET url/songs ->devuelve toda las canciones.

- GET url/:nameSong -> devuelve una cancion especifica.

- POST url/listSong-> agrego una cancion  con song en el body formato JSON.

- DELETE url/listSong  -> eliminar una cancion.
======
- PUT url/listSong -> modifica una cancion.
>>>>>>> 
*para un usuario especifico*
- POST url/:nameUser/listSong -> agrego una cancion a favorito.

- DELETE url/:nameUser/listSong  -> eliminar una cancion favorita.
