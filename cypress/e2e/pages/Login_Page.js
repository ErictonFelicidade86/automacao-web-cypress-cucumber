/// <reference types="Cypress" />
import LoginElements from '../elements/Login'

const loginElements = new LoginElements;

class LoginPage {
    accessarHomePage() {
        cy.visit('www.site.com.br');
    }

    preencherDadosNaTela() {
        cy.get(loginElements.inputEmail()).type('endereco@email.com');
        cy.get(loginElements.inpuntPassword()).type('senha');
    }

    clickEmLogin() {
        cy.get(loginElements.btnEnter).click();
    }

}

export default LoginPage