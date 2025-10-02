/// <reference types='cypress' />

describe("Servicio de notificaciones PUSH generico", () => {
  it("Prueba de API - Envio de notificacion @sanity @happyPath @smoke", () => {
    cy.request({
      method: "POST",
      url: "https://laureateqa.axity.com/api/sdig/uvm/massive/notification/generic",
      headers: {
        "x-api-key":
          "zds1TtHpxXUMWmH1NjJFlAVKjnOYYUTGmVSaaWRNLYhzC94KqAFUopUpxGzjpFEx3UpOsWjkN1weqzOcfRtkYyL1ijW8Twzv7VJh6UMJi262NaNn85Y2i46zORKsYR4j",
        "Content-Type": "application/json",
      },
      body: {
        key: "BANNER",
        brand: "uvm",
        mail: "usuariosdePruebasSD1@my.uvm.edu.mx",
        title: "Prueba notificacion",
        body: "Mensaje de prueba desde Cy",
        link: "http://www.google.com",
      },
    }).then((response) => {
      // validamos que el código de respuesta HTTP
      expect(response.status).to.eql(200);
      // validamos la estructura
      expect(response.body).to.have.all.keys(
        "code",
        "message",
        "messageError",
        "codeError",
        "data"
      );
      // mapa de validaciones basadas en el 'code'
      const validations = {
        200: () => {
          expect(response.body.message).to.eql("Ok");
          expect(response.body.data).to.eql(
            "Usuario sin Tokens Firebase configurados."
          );
        },
        400: () => {
          expect(response.body.messageError).to.not.be.null;
          cy.log("Error de cliente: " + response.body.messageError);
        },
        500: () => {
          expect(response.body.messageError).to.not.be.null;
          cy.log("Error del servidor: " + response.body.messageError);
        },
        401: () => {
          expect(response.body.messageError).to.eql("Unauthorized");
          cy.log("Error de autorización: " + response.body.messageError);
        },
      };

      // Ejecutar validación correspondiente para el 'code'
      const validationFn = validations[response.body.code];
      // Si existe validación para el 'code', se ejecuta
      if (validationFn) {
        validationFn();
      } else {
        // Si no se encuentra un 'code' esperado, logueamos el error
        cy.log("Respuesta inesperada: " + response.body.code);
        expect(response.body.code).to.be.oneOf([200, 400, 500, 401]);
      }
    });
    cy.wait(1500);
    cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  });
}); //cierre del script
