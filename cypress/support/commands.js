import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/login')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type('qamilestone.academy@gmail.com')
        cy.get('input[type = "password"]').type('admin123')
        cy.root().submit()   // submits the form yielded from 'within'
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})

Cypress.Commands.add('login', () => {

    cy.visit(Cypress.env('prod'));

    cy.get('#email').type(Cypress.env('email')).should('have.value', 'rondinele@bussolasocial.com.br');

    cy.get('#senha').type(Cypress.env('senha')).should('have.value', '@Bia120715');

    cy.get('[type="submit"]').contains('Entrar').click();

});

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class']
});