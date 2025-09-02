import AplicaDtos_Perso_Admin_DocsPO from "../../support/pageObjectsM/Administrador/AplicaDtos_Perso_Admin_DocsPO.cy.js";

describe("Portal administración", () => {
  const master = new AplicaDtos_Perso_Admin_DocsPO();
  master.visitHome();

  it(" Administracion de documentos: Cancelar ", () => {
    master.cancelar(1500);
  });

  it(" Administracion de documentos: Happy path ", () => {
    master.happyPath(1500);
  });

  it(" Administracion de documentos: Busqueda, Filtrar, Exportar ", () => {
    master.otros(1500);
  });
});
