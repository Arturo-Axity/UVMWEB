import AdminParam_Exp_Cat_BannerPO from "../../support/pageObjectsM/Administrador/AdminParam_Exp_Cat_BannerPO.cy.js";

describe("Portal administración", () => {
  const master = new AdminParam_Exp_Cat_BannerPO();
  master.visitHome();

  //----------------------------------CATALOGO BANNER-------------------------------------------------//
  it(" Catalogo Banner - Exportar, Editar, Buscar ", () => {
    master.otros(2000);
  });
});
