import Cata_Tipo_de_ArchivosPO from "../../support/pageObjectsM/Administrador/Cata_Tipo_de_ArchivosPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Tipo_de_ArchivosPO();
  master.visitHome();

  it("Catálogo Tipos de Archivos - Boton Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it("Catálogo Tipos de Archivos - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it("Catálogo Tipos de Archivos - Happy Path ", () => {
    master.happyPath(2000);
  });

  it("Catálogo Tipos de Archivos - Busqueda, Swiches, Editar, Exportar", () => {
    master.otros(2000);
  });
});
