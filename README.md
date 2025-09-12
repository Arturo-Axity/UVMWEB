# 🎓 UVM Web – Automatización de Pruebas E2E con Cypress

Este proyecto automatiza los principales flujos del portal **UVM Web**, utilizando **Cypress** y una arquitectura modular basada en Page Objects. Las pruebas se ejecutan con soporte para reportería avanzada (Mochawesome), soporte XPath y estructura separada por módulos funcionales.

---

## 🧩 Tecnologías Utilizadas

- **Cypress** ^15.0.0
- **Node.js** ^22.x
- `@cypress/grep` – Filtrado de tests por etiquetas
- `cypress-mochawesome-reporter` – Reportes HTML/JSON
- `cypress-xpath` – Soporte para selectores XPath
- `mochawesome` y herramientas asociadas (`merge`, `report-generator`)
- `puppeteer` y `chromium` – Automatización opcional
- Arquitectura: **Page Object Model (POM)**

---

## 📁 Estructura del Proyecto

```plaintext
UVMWEB/
│
├── cypress.config.js               # Configuración principal de Cypress
├── package.json                    # Dependencias y scripts
├── README.md                       # Este documento
│
├── cypress/
│   ├── e2e/                        # Casos de prueba por módulo
│   │   ├── login.cy.js
│   │   ├── PortalAlumno/
│   │   │   ├── AgendaAlumno/
│   │   │   ├── AvanceAcademico/
│   │   │   └── ... (hasta TerminosCondiciones)
│   │   └── Administrador/         # Módulos administrativos
│   │
│   ├── fixtures/                   # Archivos estáticos o datos para pruebas
│   ├── support/
│   │   ├── commands.js             # Comandos personalizados
│   │   ├── e2e.js                  # Soporte e2e (incluye plugins)
│   │   └── pageObjectsM/          # Page Objects por módulo
│   │
│   ├── downloads/                 # Descargas automáticas (PDFs, etc.)
│   ├── screenshots/               # Capturas de pantalla por prueba
│   └── reports/html/             # Reportes Mochawesome HTML y JSON


▶️ Cómo Ejecutar las Pruebas
1. Instala las dependencias
npm install

2. Ejecuta todas las pruebas
npm run test

"scripts": {
  "test": "cypress run",
  "test:login": "cypress run --spec 'cypress/e2e/login.cy.js'",
  "test:portal": "cypress run --spec 'cypress/e2e/PortalAlumno/**/*.cy.js'",
  "test:admin": "cypress run --spec 'cypress/e2e/Administrador/**/*.cy.js'",
  "report:merge": "mochawesome-merge cypress/reports/html/.jsons/*.json > mochawesome-report.json",
  "report:generate": "marge mochawesome-report.json --reportDir cypress/reports/html"
}


| Etiqueta      | Descripción                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `@sanity`     | Pruebas básicas para validar que el sistema responde y carga lo esencial. |
| `@smoke`      | Pruebas críticas del flujo principal de negocio.                          |
| `@regression` | Pruebas completas que cubren funcionalidad amplia.                        |
| `@critical`   | Pruebas de funciones esenciales que si fallan, detienen producción.       |
| `@happyPath`  | Flujo ideal, sin errores ni condiciones extremas.                         |
| `@negative`   | Casos con datos inválidos, errores o flujos inesperados.                  |


👤 Autor

Servicios Digitales
License: ISC
----------------------------------------------------------------
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
