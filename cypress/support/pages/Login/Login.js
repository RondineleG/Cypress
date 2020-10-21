let el = require('./elements').ELEMENTS;

class Login {
    abrirUrl() {
        cy.visit(Cypress.env('prod'));
    }

    preencherDadosLogin() {
        cy.get(el.email).type(Cypress.env('email'));
        cy.get(el.senha).type(Cypress.env('senha'));
        cy.get(el.submit).click();
        cy.submit();
    }

}

export default new Login();