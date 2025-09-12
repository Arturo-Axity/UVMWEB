/// <reference types='cypress' />
import "cypress-file-upload";
import TicketsPO from "../../../support/pageObjectsM/PortalAlumno/AyudaPO/TicketsPO.cy.js";

describe("Acceso al Portal Alumno - Ayuda", () => {
  const master = new TicketsPO();
  master.visitHome();

  it("Ayuda - Ver pantalla - tickets abiertos (pantalla por default) @sanity @happyPath", () => {
    master.ticketsAbiertos(2500);
  });

  it("Ayuda - tickets cerrados @happyPath @regression", () => {
    master.ticketsCerrados(2500);
  });

  it("Ayuda - Creación de Ticket @smoke @critical @happyPath @regression", () => {
    master.creacionTicket(2500);
  });

  it("Ayuda - Creación de Ticket - error @negative @regression", () => {
    master.ticketError(2500);
  });
});
