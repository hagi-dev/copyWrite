
<p align='left'>
    <img src="https://www.copywritecol.com/icon.png" width="100px"/>
</p>

# Prueba tecnica - CopyWrite


## Objetivos de la prueba

- para el formateo se utilizo  StandarJs

<strong>Frontend</strong>
- Construir una App utlizando React, Redux, bootstrap.
</br>

<strong>Backend</strong>

- Construir el server utlizando Node,Express, docker y docker compose .
- testeo con Mocha + Chai + Supertest



Tendrán un `boilerplate` con la estructura general tanto del backend como de frontend.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v
## BoilerPlate

El boilerplate cuenta con dos carpetas: `copywrite-api` y `copywrite-frontend`. En estas carpetas estará el código del back-end y el front-end respectivamente.

## puntos claves para el frontend
- primero Clonar el repositorio en su computadora.
- segundo en el frontend debes dirigirte ala carpeta copywrite-frontend y correr el comando "npm install" en la terminal para
instalar las dependencias.
- luego ejecutar "npm start" para que puedas ejecutar la app.

## puntos claves para el backend
- para ejecutar el backend debes dirigirte ala carpeta copywrite-api y "npm install" en la terminal para
instalar las dependencias.
- luego ejecutar "npm run serve" para utilizarlo.
- para ejecutar los test tiene que entrar ala carpeta copywrite-api y ahi desde la terminal
ejecutar npm run test.




## Enunciado

La idea general es crear una aplicación en la cual se puedan enviar un texto y esta le devuelva en reversa y sien palindrome:

  - mostrar el los resultados los textos enviados en inversa y verificando si es palindrome


## backend rutas (copywrite-api)

# la unica rutas es : ##
- [ ] __GET http://localhost/iecho?text=< texto >
  - Obtiene el texto invertido 
  - Obtine si es palindrome
  - si no se envia el texto obtienes un mensaje de error



