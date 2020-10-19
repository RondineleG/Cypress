const el = require('./elements').ELEMENTS;

class Atendidos {

    abrirUrl() {
        cy.visit(Cypress.env('baseUrl'));

    }

    preencherDadosLogin() {
        cy.get(el.email).type(Cypress.env('email'));
        cy.get(el.senha).type(Cypress.env('senha'));
        cy.get(el.submit).click();
    }
}

export default Atendidos()