/// <reference types='cypress' />
import MateriasPO from "../../../support/pageObjectsM/PortalAlumno/MateriaPO/MateriasPO.cy.js";

describe(" Acceso al Portal Alumno ", () => {
  const master = new MateriasPO();
  master.visitHome();

  // it(" Materias Incritas - Ver materias ", () => {
  //   master.verInscritas(2500);
  // });

  // it(" Materias Incritas - Búsqueda de materia ", () => {
  //   master.inscritasBusqueda(2500);
  // });

   it(" Materias Historial - Ver materias ", () => {
     master.verHistorial(2500);
   });  // ok

   it(" Materias Historial - Colapsar Grado ", () => {
     master.historialColapsar(2500);
   }); //ok

   it(" Materias Historial - Búqueda de materia ", () => {
     master.historialBusqueda(2500);
   });// ok

   it(" Materias Mi Plan - Ver materias ", () => {
     master.verMiplan(2500);
   }); //ok

   it(" Materias Mi Plan - Colapsar Grado ", () => {
     master.miplanColapsar(2500);
   }); //ok

   it(" Materias Mi Plan - Búqueda de materia ", () => {
     master.miplanBusqueda(2500);
   });  //ok
});
