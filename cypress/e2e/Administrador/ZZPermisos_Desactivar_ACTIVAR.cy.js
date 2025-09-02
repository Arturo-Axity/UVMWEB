/// <reference types='cypress' />
import ZZPermisos_Desactivar_ACTIVARPO from "../../support/pageObjectsM/Administrador/ZZPermisos_Desactivar_ACTIVARPO.cy.js";

describe("Portal administración", () => {
  const master = new ZZPermisos_Desactivar_ACTIVARPO();
  master.visitHome();

  let elToken = null;
  before("creating access token", () => {
    cy.request({
      method: "POST",
      url: "https://laureateqa.axity.com/auth/realms/servicios-digitales-admin-uvm/protocol/openid-connect/token",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: {
        grant_type: "client_credentials",
        scope: "openid",
        client_id: "api-client",
        client_secret: "uQplSBGmipkp0dmFmRv7xSGNBpRb99OV",
      },
    }).then((response) => {
      elToken = response.body.access_token;
    });
  });
  let tiempo = 3500;

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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
    });
  });

  //   it("Roles - Administración - Editar", () => {
  //     cy.visit(
  //       "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/modules/admin"
  //     );
  //     cy.wait(5000);

  //     cy.request({
  //       method: "PATCH",
  //       url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/service?origen=admin-web&portal=uvm",
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: "Bearer " + elToken,
  //       },
  //       body: {
  //         serviceId: 3,
  //         actionId: 3,
  //         userName: "daniel.lopezd",
  //         status: true,
  //       },
  //     }).then((response) => {
  //       expect(response.status).to.eql(200);
  //       cy.reload();

  //       cy.wait(tiempo);
  //     });
  //   });

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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
  //       status: true,
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.eql(200);
  //     cy.reload();

  //     cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
        userName: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
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
        status: true,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
    });
  });

  it("Módulo ROLES - Activar permisos", () => {
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/catalogs/roles/admin/edit/51"
    );
    cy.wait(5000);

    cy.request({
      method: "PUT",
      url: "https://laureateqa.axity.com/api/sdig/uvm/admin/catalogs/role?origen=admin-web&portal=uvm",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + elToken,
      },
      body: {
        listWithServicesAction: [
          { serviceId: 1, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 1, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 1, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 1, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 1, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 1, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 2, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 2, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 2, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 2, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 2, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 2, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 27, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 27, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 27, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 27, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 27, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 27, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 8, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 8, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 8, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 8, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 8, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 8, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 9, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 9, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 9, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 9, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 9, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 9, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 10, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 10, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 10, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 10, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 10, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 10, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 20, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 20, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 20, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 20, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 20, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 20, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 26, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 26, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 26, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 26, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 26, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 26, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 37, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 37, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 37, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 37, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 37, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 37, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 52, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 52, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 52, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 52, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 52, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 52, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 55, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 55, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 55, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 55, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 55, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 55, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 3, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 3, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 4, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 4, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 4, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 4, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 4, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 4, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 6, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 6, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 6, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 6, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 6, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 6, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 7, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 7, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 7, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 7, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 7, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 7, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 11, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 11, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 11, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 11, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 11, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 11, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 12, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 12, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 12, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 12, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 12, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 12, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 13, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 13, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 13, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 13, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 13, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 13, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 21, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 21, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 21, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 21, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 21, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 21, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 14, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 14, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 14, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 14, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 14, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 14, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 15, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 15, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 15, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 15, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 15, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 15, actionId: 6, rolId: "51", type: "add" },
          { serviceId: 18, actionId: 1, rolId: "51", type: "add" },
          { serviceId: 18, actionId: 2, rolId: "51", type: "add" },
          { serviceId: 18, actionId: 3, rolId: "51", type: "add" },
          { serviceId: 18, actionId: 4, rolId: "51", type: "add" },
          { serviceId: 18, actionId: 5, rolId: "51", type: "add" },
          { serviceId: 18, actionId: 6, rolId: "51", type: "add" },
        ],
        rolDescription: "RETEST",
        rolId: 51,
        siteId: "PDA",
        user: "daniel.lopezd",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.reload();

      cy.wait(tiempo);
      cy.visit(
        "https://laureateqa.axity.com/sdig/uvm/admin/users/tutors/admin"
      );
      cy.wait(tiempo);
    });
  });
});
