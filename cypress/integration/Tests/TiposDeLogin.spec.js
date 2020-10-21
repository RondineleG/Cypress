import Login from '../../support/pages/Login/Login'
import Perfil from '../../support/pages/Perfil/Perfil'

describe('Fazer Login', () => {

    before(function()
     {
        cy.fixture('Login').then(function(data)
         {
            this.data = data
        });

    })

    beforeEach(function()
    {
        cy.login();
    })

    it('Teste', function() {

        cy.viewport(1366, 625)
     
        cy.visit('https://app.bussolasocial.com.br/projeto-novo/cadastro')
     
          cy.xpath('//*[@id="responsavel[nome]"]').click();
          cy.xpath('//*[@id="responsavel[nome]"]').type('Ola');
        
     
    })

    it('Login usando dados na Fixture', function() {

        cy.visit(this.data.url);
        cy.get('#email').type(this.data.email);
        cy.get('#senha').type(this.data.senha);
        cy.get('.btn').contains('Entrar').click();

    });

    it('Usando Page Objects', () => {
        Login.abrirUrl();
        Login.preencherDadosLogin();
        Perfil.preencherDados();

    });


    it('Login usando dados na ENV', function() {

        Login.abrirUrl();
        cy.get('#email').type(Cypress.env('email'));
        cy.get('#senha').type(Cypress.env('senha'));
        cy.get('.btn').contains('Entrar').click();


    });

    it('Custom comands', function() {

        cy.login();

    });

})