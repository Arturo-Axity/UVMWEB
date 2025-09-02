class DatosFiscalesPO {
    visitHome() {
        let tiempo = 2500;
        beforeEach(() => {
            cy.login();
            cy.wait(tiempo);
        });
    }

    screenShot(t) {
        let tiempo = t;
        cy.wait(tiempo);
        cy.screenshot(Cypress.Screenshot.defaults({ capture: "fullPage" }));
    }

    verDatosF(t) {
        let tiempo = t;

        cy.visit("/");
        cy.wait(tiempo);
        cy.xpath(
            "//span[@class='text-content'][contains(.,'Inicia sesión con Microsoft')]"
        )
            .should("be.visible")
            .click({ force: true });
        cy.wait(tiempo);
        cy.xpath("//span[normalize-space()='Lic En Derecho']").click();
        cy.wait(tiempo);

        cy.get('[data-testid="item-icon-fiscal-information"]').click();
        cy.get("._textTitle_t4jyf_30").should(
            "have.text",
            "Administración de Datos Fiscales"
        );
        cy.wait(tiempo);
        cy.screenshot('Administración de Datos Fiscales', { capture: "fullPage" });
    }

} //final

export default DatosFiscalesPO;
