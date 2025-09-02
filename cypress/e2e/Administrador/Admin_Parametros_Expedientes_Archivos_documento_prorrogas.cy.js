import AdminParam_Exp_doc_prorrogasPO from "../../support/pageObjectsM/Administrador/AdminParam_Exp_doc_prorrogasPO.cy.js";

describe("Portal administración", () => {
  const master = new AdminParam_Exp_doc_prorrogasPO();
  master.visitHome();

  // Archivos de documento de prorrogas

  it(" Expedientes - Archivos de documento de prorrogas - btn Cancelar ", () => {
    master.btnCancelar(2000);
  });

  it(" Expedientes - Archivos de documento de prorrogas - Campos Vacios ", () => {
    master.camposVacios(2000);
  });

  it(" Expedientes - Archivos de documento de prorrogas - Happy Path  ", () => {
    master.happyPath(2000);
  });

  it(" Expedientes - Archivos de documento de prorrogas - SWITCHS, buscador, editar, exportar ", () => {
    master.otros(2000);
  });
});
