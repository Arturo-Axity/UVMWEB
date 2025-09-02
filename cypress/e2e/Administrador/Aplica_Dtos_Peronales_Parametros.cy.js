import AplicaDtos_Perso_ParametrosPO from "../../support/pageObjectsM/Administrador/AplicaDtos_Perso_ParametrosPO.cy.js";

describe("Portal administración", () => {
  const master = new AplicaDtos_Perso_ParametrosPO();
  master.visitHome();

  it(" Párametros: Checks ", () => {
    master.checks(2000);
  });

  it(" Párametros: Editar ", () => {
    master.editar(2000);
  });

  it(" Párametros: Navegación de Pestañas ", () => {
    master.navegar(2000);
  });
});
