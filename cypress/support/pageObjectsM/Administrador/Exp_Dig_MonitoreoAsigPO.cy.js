class Exp_Dig_MonitoreoAsigPO {
  visitHome() {
    let tiempo = 2500;
    beforeEach(() => {
      cy.login2();
      cy.wait(tiempo);
    });
  }

  screenShot(t) {
    let tiempo = t;
    cy.wait(tiempo);
    cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
  }

  otros(t) {
    let tiempo = t;
    cy.visit(
      "https://laureateqa.axity.com/sdig/uvm/admin/file/assignment/monitoring"
    );
    cy.wait(tiempo);
    cy.get(".route").contains(
      "Expediente digital / Asignación de expedientes / Monitoreo de asignaciones masivas"
    );
    cy.wait(tiempo);

    //Exporta (LISTO)
    cy.xpath("//span[contains(.,'Exportar .xls')]").click();
    cy.wait(tiempo);
    cy.screenshot(' Monitoreo de asignaciones masivas - Exportar ', { capture: "fullPage" });
  }
} //final

export default Exp_Dig_MonitoreoAsigPO;
