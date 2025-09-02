import Notifi_Notificaciones_TransaccionalesPO from "../../support/pageObjectsM/Administrador/Notifi_Notificaciones_TransaccionalesPO.cy.js";

describe("Portal administración", () => {
  const master = new Notifi_Notificaciones_TransaccionalesPO();
  master.visitHome();

  it("Notificaciones Transaccionales - Btn Cancelar  ", () => {
    master.btnCancelar(2000);
  });

  it("Notificaciones Transaccionales - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it("Notificaciones Transaccionales - Swithces, Ver detalle, Editar, Exportar, Buscar ", () => {
    master.otros(2000);
  });
});
