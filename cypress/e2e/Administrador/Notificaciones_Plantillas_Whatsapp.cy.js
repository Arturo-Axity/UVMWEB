import Notifi_Plantillas_WhatsappPO from "../../support/pageObjectsM/Administrador/Notifi_Plantillas_WhatsappPO.cy.js";

describe("Portal administración", () => {
  const master = new Notifi_Plantillas_WhatsappPO();
  master.visitHome();

  it("Plantilla Whatsapp - Cancelar", () => {
    master.btnCancelar(2000);
  });

  it("Plantilla Whatsapp - Campos Vacios", () => {
    master.camposVacios(2000);
  });

  it("Plantilla Whatsapp - HAPPY PATH  ", () => {
    master.happyPath(2000);
  });

  it("Plantilla Whatsapp - Ver detalle, Editar, Buscardor, Exportar ", () => {
    master.otros(2000);
  });
});
