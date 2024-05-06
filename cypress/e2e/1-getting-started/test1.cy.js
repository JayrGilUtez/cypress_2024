require('cypress-xpath');

/**
 * Sitio a probar: https://www.demoblaze.com/index.html
 *  - Visitar sitio 
 * 
 */

// Crear la funcion de la prueba con describe()

describe('Prueba al sitio de demo blaze', () => {
    // TODO codigo para realizar la prueba
    // 1.- Entrar al sitio de demo blaze

    // beforeEach() o it() antes de cada prueba
    beforeEach('Visitar Cypress.io', () => {
        //cy.visit('https://www.demoblaze.com/index.html');
        cy.visit('https://example.cypress.io');
        //cy.contains('automatically ');
    });

    it('Buscar el texto automatically ', () => {
        
        
        cy.xpath('/html/body/nav')
        .contains('Commands')
        .click()
        .wait(3000)
        .xpath('//*[@id="navbar"]/ul[1]/li[1]/ul/li[7]/a')
        .contains('Navigation')
        .click()
        

    });

    it('Buscar texto cy.go()',()=>{
        //cy.xpath('/html/body/div[2]/div/div/div[1]/h4/a')
        cy.get('#navbar')
        .contains('Commands').click()
        .wait(2000)
        .xpath('/html/body/nav/div/div[2]/ul[1]/li[1]/ul/li[7]/a').click()
        .wait(2000);
        cy.visit('https://on.cypress.io/go')

    })
});



