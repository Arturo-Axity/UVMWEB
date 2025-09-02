/// <reference types='cypress' />
import "cypress-file-upload";
import TicketsPO from "../../../support/pageObjectsM/PortalAlumno/AyudaPO/TicketsPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new TicketsPO();
  master.visitHome();

  it(" Ayuda - Ver pantalla - tickets abiertos (pantalla por default) ", () => {
    master.ticketsAbiertos(2500);
  });

  it(" Ayuda - tickets cerrados ", () => {
    master.ticketsCerrados(2500);
  });

  it(" Ayuda - Creación de Ticket ", () => {
    master.creacionTicket(2500);
  });

  it(" Ayuda - Creación de Ticket - error ", () => {
    master.ticketError(2500);
  });
});
