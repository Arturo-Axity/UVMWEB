class Obtener_PermisosUNITECPO {
  visitHome() {
    let tiempo = 2500;
    beforeEach(() => {
      cy.login2();
      cy.wait(tiempo);
    });
  }

  screenShot(t) {
    let tiempo = t;
    cy.wait(tiempo);
    cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  }

  permisosAdmin(t) {
    let tiempo = t;
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/admin"); //Todos los roles
    cy.wait(tiempo);
    cy.screenshot('Todos los roles Portal Admin', { capture: "fullPage" });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/admin/detail/1"); //Administrador General
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Administrador General-${currentPosition}`);
      }
    });

    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/admin/detail/51"); //Administración Online
    cy.wait(7500);
    cy.screenshot('Rol Administración Online', { capture: "fullPage" });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/admin/detail/57"); //Administración Presencial
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Administración Presencial-${currentPosition}`);
      }
    });

    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/admin/detail/58"); //Monitor360
    cy.wait(7500);
    cy.screenshot('Rol Monitor360', { capture: "fullPage" });

    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/admin/detail/68"); //Empleabilidad - RE
    cy.wait(7500);
    cy.screenshot('Rol Empleabilidad - RE', { capture: "fullPage" });
  }

  permisosAlumno(t) {
    let tiempo = t;
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student"); //Todos los roles
    cy.wait(tiempo);
    cy.get("#mat-select-value-1").click({ force: true });
    cy.wait(1500);
    cy.get("#mat-option-2").click({ force: true });
    cy.wait(1500);

    cy.get(".table-container-scroll").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 400;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".table-container-scroll").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Todos los roles Portal Alumno-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/2"); //Alumno
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Alumno-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/3"); //Tutor
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Tutor-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/4"); //Administrativo
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Administrativo-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/52"); //Director Servicios Escolares
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Director Servicios Escolares-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/53"); //CASA - COORDINADOR
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol CASA - COORDINADOR-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/54"); //Asesor CASA
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Asesor CASA-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/55"); //TELEMERCADEO ATENCION CLIENTES
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol TELEMERCADEO ATENCION CLIENTES-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/56"); //OPERADOR ONLINE
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol OPERADOR ONLINE-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/59"); //Visitante
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Visitante-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/60"); //ORIENTADORA VOCACIONAL
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol ORIENTADORA VOCACIONAL-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/61"); //GERENTE ACADEMICO
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol GERENTE ACADEMICO-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/62"); //Soporte Datos
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Soporte Datos-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/63"); //DROAs
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol DROAs-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/64"); //Dirección Ejecutiva
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Dirección Ejecutiva-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/65"); //RECTORES
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol RECTORES-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/66"); //DROCs
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol DROCs-${currentPosition}`);
      }
    });

    cy.wait(1500);
    cy.visit("https://portal-admin.unitec.mx/catalogs/roles/student/detail/67"); //Marketing
    cy.wait(6500);

    cy.get(".tree-container").then(($container) => {
      const containerHeight = $container[0].scrollHeight;
      const step = 300;
      const duration = 1000;

      // Bucle para hacer desplazamientos en intervalos y capturar en cada uno
      for (
        let currentPosition = 0;
        currentPosition < containerHeight;
        currentPosition += step
      ) {
        // Desplazar y esperar a que la página cargue bien
        cy.get(".tree-container").scrollTo(0, currentPosition, {
          duration: duration,
        });
        cy.wait(500);
        cy.screenshot(`Rol Marketing-${currentPosition}`);
      }
    });
  }
} //final
export default Obtener_PermisosUNITECPO;
