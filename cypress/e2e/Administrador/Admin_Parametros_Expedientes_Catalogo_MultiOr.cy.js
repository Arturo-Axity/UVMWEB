import AdminParam_Exp_Cat_MultiOrPO from "../../support/pageObjectsM/Administrador/AdminParam_Exp_Cat_MultiOrPO.cy.js";

describe("Portal administración", () => {
  const master = new AdminParam_Exp_Cat_MultiOrPO();
  master.visitHome();

  it(" Catalogo Otros origenes - Happy path", () => {
    master.happyPath(2000);
  });

  it(" Catalogo Otros origenes - Exportar, Buscar ", () => {
    master.otros(2000);
  });
});
