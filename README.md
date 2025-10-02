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

cypress
│
├───downloads # Descargas automáticas (PDFs, etc.)
│
├───e2e # Pruebas E2E (End-to-End)
│ ├───Administrador # Módulos del Portal Admin
│ ├───PortalAlumno # Módulos del Portal Alumno
│ │ ├───AgendaAlumno # Submódulo Agenda Alumno
│ │ ├───AvanceAcademico # Submódulo Avance Académico
│ │ └───... # Otros submódulos del Portal Alumno (Avatar,Ayuda, etc...)
│
├───fixtures # Archivos estáticos o datos de prueba
│
├───reports # Reportes (Mochawesome HTML y JSON)
│
├───screenshots # Capturas de pantalla por prueba
│
└───support # Archivos de soporte (Page Objects, comandos personalizados, etc.)
├───pageObjects # Page Objects por módulo
│ ├───Administrador # Page Objects del Portal Admin
│ └───PortalAlumno # Page Objects del Portal Alumno
│ ├───AgendaAlumnoPO # Page Object Agenda Alumno
│ ├───AvanceAcademicoPO # Page Object Avance Académico
│ └───... # Otros Page Objects (AvatarPO, AyudaPO, etc...)
│
├───commands.js # Comandos personalizados de Cypress
└───e2e.js # Configuración y hooks globales E2E (incluye plugins)
│
├───node_modules # Dependencias de npm
│
├───cypress.config.js # Configuración principal de Cypress
├───package.json # Dependencias y scripts del proyecto
└───README.md # Documentación del proyecto

▶️ Cómo Ejecutar las Pruebas

1. Instalar las dependencias
   npm install

1. Ejecuta todas las pruebas
   npm run test

"scripts": {
"test-ci": "cypress run --browser chrome",
"test-cicle": "npx cypress run --spec 'cypress/e2e/PortalAlumno/**/\*.cy.js'",
"test-sanity": "cypress run --spec 'cypress/e2e/PortalAlumno/**/_.cy.js' --env grep=@sanity",
"test-smoke": "cypress run --spec 'cypress/e2e/PortalAlumno/\*\*/_.cy.js' --env grep=@smoke",
"test-regression": "cypress run --spec 'cypress/e2e/PortalAlumno/**/\*.cy.js' --env grep=@regression",
"test-critical": "cypress run --spec 'cypress/e2e/PortalAlumno/**/_.cy.js' --env grep=@critical",
"test-happy": "cypress run --spec 'cypress/e2e/PortalAlumno/\*\*/_.cy.js' --env grep=@happyPath",
"test-negative": "cypress run --spec 'cypress/e2e/PortalAlumno/\*_/_.cy.js' --env grep=@negative",
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

Heidegger Antonio Robles Inda
Arturo López Velázquez
License: ISC

---

![image](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/c0bf4/cypress-logo.webp)

[Cypress](https://www.cypress.io/) requiere [Node.js](https://nodejs.org/) v14+ para funcionar correctamente.

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
