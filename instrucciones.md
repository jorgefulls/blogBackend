# API Blog

## Recuperar Autores

Method: GET
Url: /api/autores
Headers: XXXX
Body: XXXX

Response: Un array de autores


## Recuperar Posts

Method: GET
Url: /api/posts
    parámetro opcional: autor=<id>
Headers: XXXX
Body: XXXX

Response: Un array de posts con los datos de sus autores.
          Si la solicitud incluye el parámetro autor, los posts devueltos serán solo los de dicho autor


## Crear un Autor

Method: PUT
Url: /api/autores
Headers: XXXX
Body: XXXX

Response: Autor creado en la BD.


## Crear un Post

Method: PUT
Url: /api/posts
Headers: XXXX
Body: XXXX

Response: Post creado en la BD.

