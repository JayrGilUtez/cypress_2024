
import { VALID_USER } from "../data/user";

class principal{
    constructor(){
        this.url = 'http://sisuar.imta.mx/aplicacion/vista/principal.php';
        this.entrar = '.swal2-confirm';
        this.registro = '#navbarSupportedContent > ul > li:nth-child(4) > a';
        this.nombre = '#Nombre';
        this.apaterno = '#Apaterno';
        this.amaterno = '#Amaterno';
        this.usuario = '#Usuario';
        this.correo = '#Correo';
        this.contra = '#Contra';
        this.contraV = '#ContraV';
        this.registrarse_link = '#Registrar';
    }
    visitar(){
        cy.visit(this.url);
    }
    clickEntrar(){
        cy.get(this.entrar).click();
    }
    clickRegistrarse_link(){
        cy.get(this.registro).click();
        cy.get(this.nombre).type(VALID_USER.nombre);
        cy.get(this.apaterno).type(VALID_USER.apaterno);
        cy.get(this.amaterno).type(VALID_USER.amaterno);
        cy.get(this.usuario).type(VALID_USER.usuario);
        cy.get(this.correo).type(VALID_USER.correo);
        cy.get(this.contra).type(VALID_USER.contra);
        cy.get(this.contraV).type(VALID_USER.contra);
        cy.get(this.registrarse_link).click();

    }
}

export default new principal();
