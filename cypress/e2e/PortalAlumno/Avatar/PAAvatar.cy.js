/// <reference types='cypress' />
import AvatarPO from "../../../support/pageObjectsM/PortalAlumno/AvatarPO/AvatarPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new AvatarPO();
  master.visitHome();

  it("Avatar - Perfil @sanity @sanity @happyPath", () => {
    master.perfil(1500);
  });
});
