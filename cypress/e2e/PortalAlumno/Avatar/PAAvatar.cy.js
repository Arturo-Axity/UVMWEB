/// <reference types='cypress' />
import AvatarPO from "../../../support/pageObjectsM/PortalAlumno/AvatarPO/AvatarPO.cy.js";

describe(" Acceso al Portal Alumno @alumno", () => {
  const master = new AvatarPO();
  master.visitHome();

  it("Avatar - Perfil @sanity", () => {
    master.perfil(1500);
  });
});
