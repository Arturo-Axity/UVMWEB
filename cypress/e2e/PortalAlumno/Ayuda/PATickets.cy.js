/// <reference types='cypress' />
import "cypress-file-upload";
import TicketsPO from "../../../support/pageObjectsM/PortalAlumno/AyudaPO/TicketsPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new TicketsPO();
  master.visitHome();

  it(" Ayuda - Ver pantalla - tickets abiertos (pantalla por default) @sanity", () => {
    master.ticketsAbiertos(2500);
  });

  it(" Ayuda - tickets cerrados @sanity", () => {
    master.ticketsCerrados(2500);
  });

  it(" Ayuda - Creación de Ticket @sanity @critical @regression @happyPath", () => {
    master.creacionTicket(2500);
  });

  it(" Ayuda - Creación de Ticket - error @smoke @sanity @negative", () => {
    master.ticketError(2500);
  });
});
