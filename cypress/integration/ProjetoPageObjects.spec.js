import Projeto from '../support/pages/Projeto/Projeto'

describe('Cadastrando Atendidos', () => {

    beforeEach(function() {
        cy.login();
    })

    it('Cadastrar Atendidos', () => {

        Projeto.abrirUrlProjeto();

        Projeto.dadosBasicos();

        Projeto.preencherDadosProjeto();

    });
})