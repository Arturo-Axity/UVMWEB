import Cata_ParentescoPO from "../../support/pageObjectsM/Administrador/Cata_ParentescoPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_ParentescoPO();
  master.visitHome();

  it("Catálogo Parentesco - Boton Cancelar", () => {
    master.btnCancelar(2000);
  });

  it("Catálogo Parentesco - Campos Vacios", () => {
    master.camposVacios(2000);
  });

  it("Catálogo Parentesco - Happy Path  ", () => {
    master.happyPath(2000);
  });

  it("Catálogo Parentesco - Busqueda, Editar, Exportar", () => {
    master.otros(2000);
  });
});
