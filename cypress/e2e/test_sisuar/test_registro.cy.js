
require('cypress-xpath');


import principal from '../../Pages/principal.js';
import { VALID_USER } from '../../data/user.js';




describe('Prueba al registro del sisuar', () => {
    //1.- Ingresar al sitio del sisuar
    beforeEach('Visitar Sisuar', () => {
        cy.visit('http://sisuar.imta.mx/aplicacion/vista/principal.php');
    });


   // Realizar el registro con un sector sin especificar
    it('Resgistro sin especificar sector', () => {
        // 1.1 esperar un segundo
        cy.wait(1000);
        principal.clickEntrar();
        cy.wait(1000);
        principal.clickRegistrarse_link();
        cy.wait(1000);
        //cy.get('.swal2-confirm').click();

    });

})