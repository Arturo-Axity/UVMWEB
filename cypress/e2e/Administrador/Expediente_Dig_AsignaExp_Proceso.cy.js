import Exp_Dig_AsignaExp_ProcesoPO from "../../support/pageObjectsM/Administrador/Exp_Dig_AsignaExp_ProcesoPO.cy.js";

describe("Portal administración", () => {
  const master = new Exp_Dig_AsignaExp_ProcesoPO();
  master.visitHome();

  it(" Procesos de asignaciones masivas: Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" Procesos de asignaciones masivas: Happy path ", () => {
    master.happrPath(2000);
  });

  it(" Procesos de asignaciones masivas: Busqueda, Filtrar, Exportar ", () => {
    master.otros(2000);
  });
});
