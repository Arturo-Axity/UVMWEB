import Exp_Dig_Tipo_ExpedientesPO from "../../support/pageObjectsM/Administrador/Exp_Dig_Tipo_ExpedientesPO.cy.js";

describe("Portal administración", () => {
  const master = new Exp_Dig_Tipo_ExpedientesPO();
  master.visitHome();

  it(" Expedientes - Tipos de Expedientes - btn Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" Expedientes - Tipos de Expedientes - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it(" Expedientes - Tipos de Expedientes - Happy Path  ", () => {
    master.happyPath(2000);
  });

  it(" Expedientes - Tipos de Expedientes: Switches, Busqueda, Ver Editar, Ver Detalle, Exportar ", () => {
    master.otros(2000);
  });
});
