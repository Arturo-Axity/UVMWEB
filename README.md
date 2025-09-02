![image](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/c0bf4/cypress-logo.webp)

[Cypress](https://www.cypress.io/) requiere [Node.js](https://nodejs.org/) v14+ para funcionar correctamente.

## Creación de un proyecto vacío

Crear un proyecto [npm](https://www.npmjs.com/) vacío.

```sh
npm init
```

Instalar [Cypress](https://www.cypress.io/) en el proyecto [npm](https://www.npmjs.com/).

```sh
npm install cypress —-save-dev
```

Generar un archivo JSON vacío llamado **cypress.json**.

```sh
{
}
```

## Utilizar el proyecto existente

Restaurar los paquetes [npm](https://www.npmjs.com/).

```sh
npm install
```

## Ejecutar Cypress

### Modo grafico

Ejecutar en la carpeta del proyecto

```sh
npx cypress open
```

o

```sh
./node_modules/.bin/cypress open
```

Crear alias

En la seccion **scripts** del archivo **package.json** agregar

```sh
"cy": "cypress open",
"cy:*": "cypress run"
```

Ejecutar alias

```sh
$ npm run cy
$ npm run cy:run
```

**Ejemplo de prueba**

```sh
describe('primeraPrueba', () => {

    it('seacrh', () => {

        cy.visit('http://automationpractice.com/index.php');

        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
})
```

### Modo consola

_(Todos los comandos se deben ejecutar en la carpeta del proyecto)_

**Ejecutar todas las pruebas del proyecto**

```sh
$ npx cypress run
```

**Ejecutar todas las pruebas de una carpeta especifica**

```sh
$ npx cypress run --spec "cypress/integration/*.js"
```

**Ejecutar una prueba especifica**

```sh
$ npx cypress run --spec "cypress/integration/one.spec.js"
```

**Ejecutar en un navegador especifico**

```sh
$ npx cypress run --spec "cypress/integration/*.js" --browser chrome
```

**Ejecutar y guardar salida de la consola en un archivo**

```sh
$ npx cypress run> ./cypress/fileResult/$(date +'%Y%m%d%I%M%S').txt
```

## DOCKER

Imagenes disponibles en [Docker Hub](https://hub.docker.com/u/cypress).

**Ejecución por consola**

```sh
docker run -it -v $PWD:/e2e -w /e2e -e Cypress_Axity cypress/included:3.4.0
```

**Ejecución con Dockerfile**

**_Dockerfile_**

Imagen: Include

```sh
FROM cypress/included:3.4.0
WORKDIR /e2e
COPY . .
```

Imagen: Base

```sh
FROM cypress/base:10
RUN $ npx cypress verify
RUN $ npx cypress run
WORKDIR /e2e
COPY . .
```

Imagen: Browsers Chrome69

```sh
FROM cypress/browsers:chrome69
WORKDIR /e2e
COPY . .
RUN npm i cypress
RUN $ npx cypress run --browser chrome
```

**_Ejecución individual_**

1. Crear imagen

```sh
docker build -t "cypress" .
```

2. Crear y ejecutar contenedor

```sh
docker run --name "cypressContainer" "cypress"
```

3. Crear, ejecutar contenedor y copiado de archivos al host

```sh
docker run -v $PWD:/e2e -w /e2e "cypress"
```

4. Copiar videos
   4.1. Original

   ```shs
   docker cp [CONTEINERID]:/e2e/cypress/videos ./cypress
   ```

   4.2. Parametrizado

   ```sh
   docker cp $(docker ps -aq --filter="NAME=cypressContainer"):/e2e/cypress/videos ./cypress
   ```

5. Copiar imagenes
   5.1. Original

   ```sh
   docker cp [CONTEINERID]:/e2e/cypress/screenshots ./cypress
   ```

   5.2. Parametrizado

   ```sh
   docker cp $(docker ps -aq --filter="NAME=cypressContainer"):/e2e/cypress/screenshots ./cypress
   ```

**_Ejecución en grupo_**

1. Crear y ejecutar imagen y contenedor

```sh
docker build -t "cypress" . && docker run -v $PWD:/e2e -w /e2e "cypress"
```

2. Eliminar volumenes, contenedores e imagenes

```sh

docker rm $(docker ps -a -q) && docker rmi $(docker images -q) && docker volume rm $(docker volume ls -qf dangling=true)

```

**_Listado de archivos en un volume_**

1. Crear alias

```sh

alias dm-disk='docker run --rm -it -v /:/docker alpine:edge $@'

```

2. Listar volumes

```sh

docker volume ls

```

3. Inspeccionar volume

```sh

docker volume inspect [VOLUMEID]

```

4. Listar archivos

```sh

dm-disk ls -l /docker/ ...

```

**_Comandos_**

```sh
docker ps -a -q

docker rm [CONTEINERID]
docker rm $(docker ps -a -q)

docker images

docker rmi cypress
docker rmi $(docker images -q)

```

## Tecnologías

- Mocha
- Chai
- Java Script
- Node.js
- npm
- Docker
- Jenkins

## Licencia

MIT
