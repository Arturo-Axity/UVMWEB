import Cata_Biblio_DigPO from "../../support/pageObjectsM/Administrador/Cata_Biblio_DigPO.cy.js";

describe("Portal administración", () => {
  const master = new Cata_Biblio_DigPO();
  master.visitHome();

  it("Catálogos Bibliotecas - Btn Cancelar  ", () => {
    master.btnCancelar(2000);
  });

  it("Catálogos Bibliotecas - Campos Vacios  ", () => {
    master.camposVacios(2000);
  });

  it("Catálogos Bibliotecas - Agregar Registro - Happy Path  ", () => {
    master.happyPath(2000);
  });

  it("Catálogos Bibliotecas - Editar, Busqueda, Exportar  ", () => {
    master.otros(2000);
  });
});
