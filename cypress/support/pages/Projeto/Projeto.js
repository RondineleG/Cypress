const el = require('./elements').ELEMENTS;

class Projeto {

    abrirUrlProjeto() {
        cy.get(el.menuProjeto).contains('Projetos').click();
        cy.get(el.cadastrarProjeto).contains('Cadastrar Projeto').click();
    }

    dadosBasicos() {

        cy.get(el.nome).type('Novo Projeto');
        cy.get(el.dataInicial).type('12012020');
        cy.get(el.dataFinal).type('12012021');
        cy.get(el.selecaoPrograma).click();
        cy.get(el.programaSelecionado).click();
        cy.get(el.descricao).type('Novo Projeto pa testar');

    }


    preencherDadosProjeto() {


        cy.get(el.publico).click()
        cy.get(el.tipo).click()
        cy.get(el.nomeReponsavel).type('Novo Nome');
        cy.get(el.emailReponsavel).type('email@mail.com');

        cy.get(el.responsavel).within(() => {
            // cy.get() will only search for elements within form, not within the entire document
            cy.get('input[type = "text"]').contains('id="responsavel[nome]"').type('qamilestone.academy@gmail.com')
        })

    }


}

export default new Projeto()