
Cypress.Commands.add('login', () =>
 {

    cy.visit(Cypress.env('prod'));

    cy.get('#email').type(Cypress.env('email')).should('have.value', 'rondinele@bussolasocial.com.br');

    cy.get('#senha').type(Cypress.env('senha')).should('have.value', '@Bia120715');

   cy.get('[type="submit"]').contains('Entrar').click();

});

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class']
});