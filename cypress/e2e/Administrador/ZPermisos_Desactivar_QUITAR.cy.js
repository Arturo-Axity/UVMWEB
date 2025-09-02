/// <reference types='cypress' />

describe("Portal administración", () => {
  beforeEach(() => {
    cy.login2();
  });

  let elToken = null;
  before("creating access token", () => {
    cy.request({
      method: "POST",
      url: "https://laureateqa.axity.com/auth/realms/servicios-digitales-admin-uvm/protocol/openid-connect/token",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: {
        grant_type: "authorization_code",
        scope: "openid",
        client_id: "api-client",
        client_secret: "uXIk7DIDI3pJWvd47VXwPAzCokkwdeRY",
      },
    }).then((response) => {
      elToken = response.body.access_token;
    });
  });
  let tiempo = 1500;

  it("Enrolamiento de Usuarios - Portal admin - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 1,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/admin"
      );
      cy.xpath("//span[contains(.,'Enrolar nuevo usuario')]").should(
        "not.exist"
      );
    });
  });

  it("Enrolamiento de Usuarios - Portal admin - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 1,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/admin"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Enrolamiento de Usuarios - Portal admin - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 1,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/admin"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Eliminar')])[1]").should("not.exist");
    });
  });

  it("Enrolamiento de Usuarios - Portal admin - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 1,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/admin"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Enrolamiento de Usuarios - Portal alumno - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 2,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/student"
      );
      cy.xpath("//span[contains(.,'Enrolar nuevo usuario')]").should(
        "not.exist"
      );
    });
  });

  it("Enrolamiento de Usuarios - Portal alumno - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 2,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/student"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Enrolamiento de Usuarios - Portal alumno - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 2,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/student"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Eliminar')])[1]").should("not.exist");
    });
  });

  it("Enrolamiento de Usuarios - Portal alumno - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 2,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/enrollment/student"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Tutores - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 27,
        actionId: 2,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin"
      );
      cy.xpath("//span[contains(.,'Nuevo tutor')]").should("not.exist");
    });
  });

  it("Tutores - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 27,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Tutores - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 27,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Eliminar')])[1]").should("not.exist");
    });
  });

  it("Tutores - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 27,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin"
      );
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Campus - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 8,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/campus"
      );
      cy.wait(5000);

      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Data Warehouse - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 9,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/dwh"
      );
      cy.wait(5000);

      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Bibliotecas Digitales - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 10,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries/detail?name=Tipo%20Documento&cve=B001"
      );
      cy.xpath("//span[contains(.,'Agregar registro')]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Bibliotecas Digitales - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 10,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries/detail?name=Tipo%20Documento&cve=B001"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Bibliotecas Digitales - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 10,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries/detail?name=Tipo%20Documento&cve=B001"
      );
      cy.wait(tiempo);
    });
  });

  it("Administración de Catálogos - Bibliotecas Digitales - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 10,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/libraries"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Calendarios - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 20,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars/detail?name=Tipos%20de%20Calendario&cve=D001"
      );
      cy.xpath("//button[contains(.,'Agregar registro')]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Calendarios - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 20,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars/detail?name=Tipos%20de%20Calendario&cve=D001"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Calendarios - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 20,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars/detail?name=Tipos%20de%20Calendario&cve=D001"
      );
      cy.wait(tiempo);
    });
  });

  it("Administración de Catálogos - Calendarios - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 20,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/calendars"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Tipo de Archivos - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 26,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
      );
      cy.xpath("//span[contains(.,'Nuevo registro')]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Tipo de Archivos - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 26,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Tipo de Archivos - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 26,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
      );
      cy.wait(tiempo);
    });
  });

  it("Administración de Catálogos - Tipo de Archivos - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 26,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/file-types"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Parentesco - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 37,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
      );
      cy.xpath("//button[contains(.,'Nuevo registro')]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Parentesco - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 37,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Parentesco - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 37,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
      );
      cy.wait(tiempo);
    });
  });

  it("Administración de Catálogos - Parentesco - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 37,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/relationship"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Días de Prórroga - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 52,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
      );
      cy.xpath("//span[contains(.,'Nuevo registro')]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Días de Prórroga - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 52,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Días de Prórroga - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 52,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
      );
      cy.wait(tiempo);
    });
  });

  it("Administración de Catálogos - Días de Prórroga - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 52,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/days-extension"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Catálogos - Parámetros de Plantillas - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 55,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
      );
      cy.xpath("//span[contains(.,'Nuevo parámetro')]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Parámetros de Plantillas - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 55,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Catálogos - Parámetros de Plantillas - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 55,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
      );
      cy.wait(tiempo);
    });
  });

  it("Administración de Catálogos - Parámetros de Plantillas - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 55,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/admin/template-params"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Roles - Administración - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 3,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
      );
      cy.xpath("//span[contains(.,'Agregar nuevo rol')]").should("not.exist");
    });
  });

  // it("Roles - Administración - Editar", () => {
  //   cy.visit(
  //     "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
  //   );
  //   cy.wait(5000);

  //   cy.request({
  //     method: "PATCH",
  //     url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: "Bearer " + elToken,
  //     },
  //     body: {
  //       serviceId: 3,
  //       actionId: 3,
  //       userName: "daniel.lopezd",
  //       status: false,
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.eql(200);
  //     cy.reload();

  //     cy.visit(
  //       "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
  //     );
  //     cy.wait(tiempo);
  //     cy.xpath("(//mat-icon[contains(.,'more_vert')])[3]")
  //       .should("be.visible")
  //       .click();
  //     cy.xpath("(//span[contains(.,'Editar')])[2]").should("not.exist");
  //   });
  // });

  it("Roles - Administración - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 3,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[3]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Eliminar')])[2]").should("not.exist");
    });
  });

  // it("Roles - Administración - Lectura", () => {
  //   cy.visit(
  //     "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
  //   );
  //   cy.wait(5000);

  //   cy.request({
  //     method: "PATCH",
  //     url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: "Bearer " + elToken,
  //     },
  //     body: {
  //       serviceId: 3,
  //       actionId: 5,
  //       userName: "daniel.lopezd",
  //       status: false,
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.eql(200);
  //     cy.reload();

  //     cy.visit(
  //       "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin"
  //     );
  //     cy.wait(tiempo);
  //     cy.get(".tile")
  //       .should("be.visible")
  //       .should(
  //         "have.text",
  //         "No se pudo encontrar la página o no tiene permiso para verla."
  //       );
  //   });
  // });

  it("Roles - Alumnos - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 4,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/student"
      );
      cy.xpath("//span[contains(.,'Agregar nuevo rol')]").should("not.exist");
    });
  });

  it("Roles - Alumnos - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 4,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/student"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[4]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[4]").should("not.exist");
    });
  });

  it("Roles - Alumnos - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 4,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/student"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[4]")
        .should("be.visible")
        .click();
      cy.xpath("//span[contains(.,'Eliminar')]").should("not.exist");
    });
  });

  it("Roles - Alumnos - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 4,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/student"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Módulos y Servicios - Portal de Alumnos - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 6,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/student/web"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Módulos y Servicios - Aplicación Alumnos - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 7,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/student/mobile"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Bibliotecas - Consulta de Bibliotecas Digitales - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 11,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
      );
      cy.xpath("//span[contains(.,'Nueva biblioteca digital')]").should(
        "not.exist"
      );
    });
  });

  it("Administración de Bibliotecas - Consulta de Bibliotecas Digitales - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 11,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Bibliotecas - Consulta de Bibliotecas Digitales - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 11,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
      );
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Eliminar')])[1]").should("not.exist");
    });
  });

  it("Administración de Bibliotecas - Consulta de Bibliotecas Digitales - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 11,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/digital"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Bibliotecas - Consulta de Documentos Administrativos - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 12,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/adtve-docs"
      );
      cy.xpath("//span[contains(.,'Cargar nuevo documento')]").should(
        "not.exist"
      );
    });
  });
  it("Administración de Bibliotecas - Consulta de Documentos Administrativos - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 12,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/adtve-docs"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Bibliotecas - Aprobación de Documentos - Aprobar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 13,
        actionId: 1,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/doc-approval/detail/3/3"
      );
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Aceptar')]").should("not.exist");
    });
  });
  it("Administración de Bibliotecas - Aprobación de Documentos - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 13,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/admin/doc-approval"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Parámetros - Parámetros - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 21,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/libraries/params/admin/BIBL"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Expedientes Digitales - Administración de Documentos - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 14,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
      cy.xpath("//span[contains(.,'Nuevo documento')]").should("not.exist");
    });
  });

  it("Administración de Expedientes Digitales - Administración de Documentos - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 14,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Expedientes Digitales - Administración de Documentos - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 14,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Eliminar')])[1]").should("not.exist");
    });
  });

  it("Administración de Expedientes Digitales - Administración de Documentos - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 14,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/docs");
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Expedientes Digitales - Tipos de Expedientes - Crear", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        actionId: 2,
        serviceId: 15,
        status: false,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types");
      cy.xpath("//span[contains(.,'Nuevo expediente')]").should("not.exist");
    });
  });

  it("Administración de Expedientes Digitales - Tipos de Expedientes - Editar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 15,
        actionId: 3,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types");
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Editar')])[1]").should("not.exist");
    });
  });

  it("Administración de Expedientes Digitales - Tipos de Expedientes - Eliminar", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 15,
        actionId: 4,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types");
      cy.wait(tiempo);
      cy.xpath("(//mat-icon[contains(.,'more_vert')])[1]")
        .should("be.visible")
        .click();
      cy.xpath("(//span[contains(.,'Eliminar')])[1]").should("not.exist");
    });
  });

  it("Administración de Expedientes Digitales - Tipos de Expedientes - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 15,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit("https://laureateqa.axity.com/sdig/uvm/admin/file/admin/types");
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });

  it("Administración de Parámetros - Parámetros - Lectura", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
    );
    cy.wait(5000);

    cy.request({
      method: "PATCH",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        serviceId: 18,
        actionId: 5,
        userName: "daniel.lopezd",
        status: false,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/file/params/admin/EXPD"
      );
      cy.wait(tiempo);
      cy.get(".tile")
        .should("be.visible")
        .should(
          "have.text",
          "No se pudo encontrar la página o no tiene permiso para verla."
        );
    });
  });
});
