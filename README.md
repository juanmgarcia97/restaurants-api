# restaurants-api

Esta es una api para buscar restaurantes cercanos a un lugar. Se ha implementado un servicio de autenticación de usuarios,
donde se puede registrar, iniciar sesión y cerrar sesión. Tambien se conectan los servicios con una base de datos *PostgreSQL*
donde se almacena la información de los usuarios registrados y los lugares buscados.

## Configuración del ambiente

Para poder ejecutar la API se debe tener instalado previamente **_Node.js_** y **_npm_**. Al clonar o descargar el
repositorio ([código aquí](https://github.com/juanmgarcia97/restaurants-api.git)) se debe correr el comando `npm install`
en la terminal de preferencia, estando dentro de la carpeta del proyecto.

## Ejecución

`npm run dev` para correr la aplicación utilizando nodemon y `npm start` para correr la aplicación con node. Esta corre
por el puerto 3000.

## Pruebas

Los escenarios de prueba pueden ser descargados e importados en *Postman* usando el siguiente 
[link](https://www.getpostman.com/collections/ceca3424344ce40ae62c)