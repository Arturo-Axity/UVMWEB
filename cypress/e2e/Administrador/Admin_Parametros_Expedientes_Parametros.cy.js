import AdminParam_Exp_ParametrosPO from "../../support/pageObjectsM/Administrador/AdminParam_Exp_ParametrosPO.cy.js";

describe("Portal administración", () => {
  const master = new AdminParam_Exp_ParametrosPO();
  master.visitHome();

  //----------------------------------Expediente digital Parámetros-------------------------------------------------//

  it(" Expediente digital Parámetros - Editar, Buscar, Exportar ", () => {
    master.otros(2000);
  });
});
