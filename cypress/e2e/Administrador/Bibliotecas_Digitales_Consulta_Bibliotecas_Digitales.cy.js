import Biblio_Dig_Consulta_Biblio_DigiPO from "../../support/pageObjectsM/Administrador/Biblio_Dig_Consulta_Biblio_DigiPO.cy.js";

describe("Portal administración", () => {
  const master = new Biblio_Dig_Consulta_Biblio_DigiPO();
  master.visitHome();

  //--------------------------------------Consulta de Bibliotecas Digitales--------------------------------------------------------------------

  it(" B - D - Consulta de Bibliotecas - btn Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" B - D - Consulta de Bibliotecas - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it(" B - D - Consulta de Bibliotecas - Happy Path ", () => {
    master.happrPath(2000);
  });

  it(" B - D - Consulta de Bibliotecas - Switches - ver Detalle , Editar, Buscador, Exportar ", () => {
    master.otros(2000);
  });
});
