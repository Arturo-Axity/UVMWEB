import Biblio_Dig_Param_BibliotecasPO from "../../support/pageObjectsM/Administrador/Biblio_Dig_Param_BibliotecasPO.cy.js";

describe("Portal administración", () => {
  const master = new Biblio_Dig_Param_BibliotecasPO();
  master.visitHome();

  //----------------------------------PARAMETROS BIBLIOTECAS------------------------------------------------//

  it(" Parametros Bibliotecas - Exportar, Editar, Buscar ", () => {
    master.otros(2000);
  });
});
