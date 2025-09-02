import Biblio_Dig_Aprob_DocPO from "../../support/pageObjectsM/Administrador/Biblio_Dig_Aprob_DocPO.cy.js";

describe("Portal administración", () => {
  const master = new Biblio_Dig_Aprob_DocPO();
  master.visitHome();

  //-----------------------------------------Aprobación de Documentos------------------------------------------------------------------

  it(" B D - Aprobación de Documentos - Exportar, Actualizar ", () => {
    master.otros(2000);
  });
});
