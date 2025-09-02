class InfoEstudiantePO {
  visitHome() {
    let tiempo = 2500;
    beforeEach(() => {
      cy.login();
      cy.wait(tiempo);
    });
  }

  screenShot(t) {
    let tiempo = t;
    cy.wait(tiempo);
    cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  }

  verDatosPersonales(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-student-information"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Información del estudiante"
    );
    cy.wait(1000);

    cy.xpath("//span[contains(.,'Información personal')]")
      .should("be.visible")
      .click({ force: true });

    cy.get("._title_k80gs_5").should("have.text", " Información personal ");
    cy.wait(tiempo);
    cy.screenshot('Informacion del estudiante - Datos personales ', { capture: "fullPage" });
  }

  verDomicilio(t) {
    let tiempo = t;
    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-student-information"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Información del estudiante"
    );
    cy.wait(tiempo);

    cy.xpath("//span[contains(.,'Información personal')]")
      .should("be.visible")
      .click({ force: true });
    cy.get("._title_k80gs_5").should("have.text", " Información personal ");
    cy.get('[data-testid="tab2"]').should("be.visible").click();
    cy.wait(5000);
    cy.screenshot('Informacion del estudiante - Domicilio ', { capture: "fullPage" });
  }

  verDatosContacto(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-student-information"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Información del estudiante"
    );
    cy.wait(tiempo);

    cy.xpath("//span[contains(.,'Datos de contacto')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);
    cy.get("._title_1lll8_8").should("have.text", " Datos de contacto ");
    cy.wait(tiempo);
    cy.screenshot('Informacion del estudiante - Datos de contacto ', { capture: "fullPage" });
  }

  verTutor(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-student-information"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Información del estudiante"
    );
    cy.wait(tiempo);

    cy.xpath("//span[contains(.,'Padre, madre o tutor')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get("._title_1bzam_11").should("have.text", " Padre, madre o tutor ");
    cy.wait(tiempo);
    cy.screenshot('Informacion del estudiante - Padre, madre o tutor ', { capture: "fullPage" });
  }

  altaTutor(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-student-information"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Información del estudiante"
    );
    cy.wait(1000);

    cy.xpath("//span[contains(.,'Padre, madre o tutor')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get("._title_1bzam_11").should("have.text", " Padre, madre o tutor "); //titulo

    //alta
    cy.get("#person_add").should("be.visible").click({ force: true });
    cy.wait(tiempo);

    let numero_test = 1;
    cy.fixture("DatosTutor").then((datos) => {
      let nombres = datos.nombres;
      let apellidos = datos.apellidos;
      let numeros_telefonicos = datos.numeros_telefonicos;
      let curp = datos.curp;
      let empresa = datos.empresa;
      let puesto = datos.puesto;
      let ocupacion = datos.ocupacion;

      for (let num = 1; num <= numero_test; num++) {
        let estadoArr = ["1: 1", "3:13", "5:32"];
        let Ramdom_estado =
          estadoArr[Math.floor(Math.random() * estadoArr.length)];
        let cantidad = Math.floor(Math.random() * 3000);
        let nombreAleatorio =
          nombres[Math.floor(Math.random() * nombres.length)];
        let apellidoAleatorio =
          apellidos[Math.floor(Math.random() * apellidos.length)];
        let telefonoAleatorio =
          numeros_telefonicos[
          Math.floor(Math.random() * numeros_telefonicos.length)
          ];
        let curpAleatorio = curp[Math.floor(Math.random() * curp.length)];
        let empresaAleatorio =
          empresa[Math.floor(Math.random() * empresa.length)];
        let puestoAleatorio = puesto[Math.floor(Math.random() * puesto.length)];
        let ocupacionAleatorio =
          ocupacion[Math.floor(Math.random() * ocupacion.length)];

        cy.get('[data-testid="CURP-test"]')
          .scrollIntoView()
          .should("be.visible")
          .type(curpAleatorio);
        cy.get('[data-testid="Nombre(s)-test"]')
          .should("be.visible")
          .type(nombreAleatorio);
        cy.get('[data-testid="Primer apellido-test"]')
          .should("be.visible")
          .type(apellidoAleatorio);
        cy.get('[data-testid="Segundo apellido-test"]')
          .should("be.visible")
          .type(apellidoAleatorio);
        cy.get('[style="position: relative;"] > button')
          .should("be.visible")
          .click();
        cy.wait(1000); //parentesco
        cy.xpath("//button[contains(.,'Padre')]")
          .should("be.visible")
          .click({ force: true });

        cy.get('[data-testid="Correo personal-test"]')
          .should("be.visible")
          .type("email" + cantidad + "@gmail.com");
        cy.get('[data-testid="Teléfono de celular-test"]')
          .should("be.visible")
          .type(telefonoAleatorio);
        cy.get('[data-testid="Empresa-test"]')
          .should("be.visible")
          .type(empresaAleatorio);
        cy.get('[data-testid="Puesto-test"]')
          .should("be.visible")
          .type(puestoAleatorio);
        cy.get('[data-testid="Ocupación-test"]')
          .should("be.visible")
          .type(ocupacionAleatorio);

        cy.wait(1000);
        cy.xpath(
          "//span[contains(.,'Sube aquí tu documento')]"
        ).scrollIntoView();

        //subir archivo
        cy.fixture("docs/Evento.pdf").then((fileContent) => {
          cy.get('input[type="file"]').attachFile({
            fileContent: fileContent,
            fileName: "Evento.pdf",
            mimeType: "application/pdf",
          });
        });
        // Descomentar en caso de enviar la solicitud
        cy.wait(tiempo);
        cy.xpath("//span[contains(.,'Enviar')]").click();
        cy.wait(9000);

        cy.wait(tiempo);
        cy.screenshot('Informacion del estudiante - Alta de Padre, madre o tutor ', { capture: "fullPage" });
      }
    });
  }

  verResponsable(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-student-information"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Información del estudiante"
    );
    cy.wait(tiempo);

    cy.xpath("//span[contains(.,'Responsable económico')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get("._title_1gfjv_11").should("have.text", " Responsable económico ");
    cy.wait(tiempo);
    cy.screenshot('Informacion del estudiante - Responsable económico ', { capture: "fullPage" });
  }

  altaResponsable(t) {
    let tiempo = t;

    cy.visit("/");
    cy.wait(tiempo);
    cy.xpath(
      "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Lic Admon De Neg Internac')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get('[data-testid="item-icon-student-information"]')
      .should("be.visible")
      .click();
    cy.get("._textTitle_t4jyf_30").should(
      "have.text",
      "Información del estudiante"
    );
    cy.wait(1000);

    cy.xpath("//span[contains(.,'Responsable económico')]")
      .should("be.visible")
      .click();
    cy.wait(tiempo);

    cy.get("._title_1gfjv_11").should("have.text", " Responsable económico "); //titulo
    cy.wait(1000);

    //alta
    cy.get('._titleContainer_1gfjv_11 > [data-testid="svg-container"]')
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);

    let numero_test = 1;
    cy.fixture("DatosTutor").then((datos) => {
      let nombres = datos.nombres;
      let apellidos = datos.apellidos;
      let numeros_telefonicos = datos.numeros_telefonicos;
      let curp = datos.curp;
      let empresa = datos.empresa;
      let puesto = datos.puesto;
      let ocupacion = datos.ocupacion;

      for (let num = 1; num <= numero_test; num++) {
        let estadoArr = ["1: 1", "3:13", "5:32"];
        let Ramdom_estado =
          estadoArr[Math.floor(Math.random() * estadoArr.length)];
        let cantidad = Math.floor(Math.random() * 3000);
        let nombreAleatorio =
          nombres[Math.floor(Math.random() * nombres.length)];
        let apellidoAleatorio =
          apellidos[Math.floor(Math.random() * apellidos.length)];
        let telefonoAleatorio =
          numeros_telefonicos[
          Math.floor(Math.random() * numeros_telefonicos.length)
          ];
        let curpAleatorio = curp[Math.floor(Math.random() * curp.length)];
        let empresaAleatorio =
          empresa[Math.floor(Math.random() * empresa.length)];
        let puestoAleatorio = puesto[Math.floor(Math.random() * puesto.length)];
        let ocupacionAleatorio =
          ocupacion[Math.floor(Math.random() * ocupacion.length)];

        cy.get('[data-testid="CURP-test"]')
          .scrollIntoView()
          .should("be.visible")
          .type(curpAleatorio);
        cy.get('[data-testid="Nombre(s)-test"]')
          .should("be.visible")
          .type(nombreAleatorio);
        cy.get('[data-testid="Primer apellido-test"]')
          .should("be.visible")
          .type(apellidoAleatorio);
        cy.get('[data-testid="Segundo apellido-test"]')
          .should("be.visible")
          .type(apellidoAleatorio);
        cy.get('[style="position: relative;"] > button')
          .should("be.visible")
          .click();
        cy.wait(1000); //parentesco
        cy.xpath("//button[contains(.,'Padre')]")
          .should("be.visible")
          .click({ force: true });

        cy.get('[data-testid="Correo personal-test"]')
          .should("be.visible")
          .type("email" + cantidad + "@gmail.com");
        cy.get('[data-testid="Teléfono de celular-test"]')
          .should("be.visible")
          .type(telefonoAleatorio);
        cy.get('[data-testid="Empresa-test"]')
          .should("be.visible")
          .type(empresaAleatorio);
        cy.get('[data-testid="Puesto-test"]')
          .should("be.visible")
          .type(puestoAleatorio);
        cy.get('[data-testid="Ocupación-test"]')
          .should("be.visible")
          .type(ocupacionAleatorio);

        cy.wait(1000);
        cy.xpath(
          "//span[contains(.,'Sube aquí tu documento')]"
        ).scrollIntoView();

        //subir archivo
        cy.fixture("docs/Evento.pdf").then((fileContent) => {
          cy.get('input[type="file"]').attachFile({
            fileContent: fileContent,
            fileName: "Evento.pdf",
            mimeType: "application/pdf",
          });
        });

        // Descomentar en caso de enviar la solicitud
        cy.wait(tiempo);
        cy.xpath("//span[contains(.,'Enviar')]").click();
        cy.wait(9000);

        cy.wait(tiempo);
        cy.screenshot('Informacion del estudiante - Alta de Responsable económico ', { capture: "fullPage" });
      }
    });
  }
} //final

export default InfoEstudiantePO;
