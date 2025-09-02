/// <reference types='cypress' />

describe("Servicio de Expedientes Digitales Banner", () => {
  it("Prueba de API - Consulta de Exp en banner", () => {
    // Primero obtener el token
    cy.request({
      method: "GET",
      url: "https://crmservicestest.laureate.mx/document-dig-service/v1/token",
      headers: {
        Cookie: "GCLB=CK6Jlbipme-MQhAD",
        user: "UVMNET\\MFRWDTBCDV",
        password: "Desarrollo2015",
      },
    })
      .then((response) => {
        // Verificar la respuesta
        expect(response.status).to.eq(200);

        // Obtener token de la respuesta
        const token = response.body.token;
        cy.log("Token:", token);
      })
      .then((consultaResponse) => {});
  });
});
