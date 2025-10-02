/// <reference types='cypress' />

import EstadoCuentaPO from "../../../support/pageObjectsM/PortalAlumno/EstadoCuentaPO/EstadoCuentaPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new EstadoCuentaPO();
  master.visitHome();

  //ESTADO DE CUENTA
  it(" Ver Estado de Cuenta @sanity", () => {
    master.verEstado(2500);
  });

  it("Estado de Cuenta - Ver Pagos Banner 7 @sanity @critical", () => {
    master.verPagos7(2500);
  });

  it("Estado de Cuenta - Ver Pagos Banner 9 @sanity @critical", () => {
    master.verPagos9(2500);
  });

  it("Estado de Cuenta - Ver detalle de Historial de Pagos @sanity", () => {
    master.historialPagos(2500);
  });

  // it("Estado de Cuenta - Historial de Pagos - Filtrado", () => {
  //   master.historialFiltrado(2500);
  // });

  //Ver metodos de pago
  it(" Estado de Cuenta - Ver metodos de pago @sanity @regression @happyPath @smoke", () => {
    master.metodosPago(2500);
  });

  it(" Estado de Cuenta - Método de pado CoDi @sanity @regression @smoke", () => {
    master.codi(2500);
  });

  //REFERENCIA BANCARIA
  it(" Ver Referencia Bancaria @sanity", () => {
    master.verReferencia(2500);
  });

  it(" Descargar Referencia Bancaria @sanity", () => {
    master.descargaReferencia(2500);
  });
});
