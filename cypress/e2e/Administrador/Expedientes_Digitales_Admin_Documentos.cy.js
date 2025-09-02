import Exp_Dig_Admin_DocumentosPO from "../../support/pageObjectsM/Administrador/Exp_Dig_Admin_DocumentosPO.cy.js";

describe("Portal administración", () => {
  const master = new Exp_Dig_Admin_DocumentosPO();
  master.visitHome();

  it(" Expedientes -Administración de documentos - btn Cancelar  ", () => {
    master.btnCancelar(2000);
  });

  it(" Expedientes -Administración de documentos - Campos Vacios  ", () => {
    master.camposVacios(2000);
  });

  it(" Expedientes -Administración de documentos - Happy Path  ", () => {
    master.happyPath(2000);
  });

  it(" Expedientes - Administración de documentos: Switches, Busqueda, Ver Editar, Ver Detalle, Exportar ", () => {
    master.otros(2000);
  });
});
