import Notifi_OrigenNotiPushPO from "../../support/pageObjectsM/Administrador/Notifi_OrigenNotiPushPO.cy.js";

describe("Portal administración", () => {
  const master = new Notifi_OrigenNotiPushPO();
  master.visitHome();

  it(" Origen notificación push - Nuevo registro  ", () => {
    master.happyPath(2000);
  });

  it(" Origen notificación push - Exportar, Buscar ", () => {
    master.otros(2000);
  });
});
