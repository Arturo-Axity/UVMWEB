import Config_Parametrizar_ImagPO from "../../support/pageObjectsM/Administrador/Config_Parametrizar_ImagPO.cy.js";

describe("Portal administración", () => {
  const master = new Config_Parametrizar_ImagPO();
  master.visitHome();

  it("ParámetrizarImagenes - Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it("ParámetrizarImagenes - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it("ParámetrizarImagenes - BUSCAR, Exportar  ", () => {
    master.otros(2000);
  });
});
