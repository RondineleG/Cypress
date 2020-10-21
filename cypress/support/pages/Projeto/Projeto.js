const el = require('./elements').elements;

//import * as el from './exporta';
 
class Projeto 
{
       
    EditarUmProjeto (codigo)
    {
         cy.visit( `https://app.bussolasocial.com.br/projeto-novo/${codigo}/cadastro`);
    }
  
     CadastrarNovoProjeto()
     {
         cy.get(el.menuProjeto).contains('Projetos').click();

         cy.get(el.cadastrarProjeto).contains('Cadastrar Projeto').click();
     }
    
      PreencherDadosBasicoDoProjeto () 
      {        
       
        cy.get(el.nomeDoProjeto).clear();
        cy.get(el.nomeDoProjeto).type('Novo Projeto');

        cy.get(el.dataInicial).clear();
        cy.get(el.dataInicial).type('12012020');

        cy.get(el.dataFinal).clear();
        cy.get(el.dataFinal).type('12012021');

        cy.get(el.selecaoPrograma).click();

        cy.get(el.programaSelecionado).click();

        cy.get(el.descricaoDoProjeto).click();
        cy.get(el.descricaoDoProjeto).type('Novo Projeto pa testar');

        cy.get(el.publicoBeneficiado).click()

        cy.get(el.areaDeAtuacao).click()           

        cy.xpath(el.nomeReponsavel).clear();
        cy.xpath(el.nomeReponsavel).type('Novo Nome X');

        cy.xpath(el.emailReponsavel).clear();
        cy.xpath(el.emailReponsavel).type('email@mail.com');

        cy.xpath(el.skypeResponsavel).clear();
        cy.xpath(el.skypeResponsavel).type('45454545');

        cy.get(el.telefoneReponsavel).clear();
        cy.get(el.telefoneReponsavel).type('9999999');

         cy.get(el.operadoraTelefone).click();

        cy.get(el.selecionarOperadora).click();   
         
        cy.get(el.salvarDados).click();
        cy.get(el.cadastrarResumo).click();
        cy.url().should('contains', '/resumo');
       
    }

    PreencherResumoDoProjeto() 
    {        
        cy.get(el.resumoProjeto).clear();
       
        cy.get(el.resumoProjeto).type('Breve resumo sobre o projeto a ser criado');
         
        cy.get(el.salvarResumo).click();

        cy.get(el.modaVisivel).should('be.visible');
      
        cy.get(el.cadastrarObjetivo).click();
        cy.url().should('contain', '/objetivos')
    }

    PreencherObjetivosDoProjeto()
    {
  
        cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/objetivos')
       
        cy.get(el.objetivoGeral).click().clear()
          .type('O objetivo geral é o que desejamos atingir com esse projeto.');
         

       cy.xpath(el.primeiroObjetivo).click().clear()
         .type('O objetivo específico é a construção passo a passo do objetivo geral, ou seja, sua trajetória até alcançar o mesmo.');

        cy.xpath(el.salvarObjetivo).click();
        cy.get(el.cadastrarPlano).click();
        cy.url().should('contains', '/planos');

    
    }

}

export default new Projeto();