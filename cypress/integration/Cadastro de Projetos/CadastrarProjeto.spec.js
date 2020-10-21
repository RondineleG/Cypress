import Bussola from "../../support/pages/Projeto/Projeto";

describe("Cadastrar Um Novo Projeto", () => {
  beforeEach(function() {
      cy.login();
  })

  // before(function () {
  //   cy.login();
  // });

  it("Cadastrar novo projeto ", () => 
  {
    Bussola.CadastrarNovoProjeto();

    Bussola.PreencherDadosBasicoDoProjeto();

    Bussola.PreencherResumoDoProjeto()

    Bussola.PreencherObjetivosDoProjeto();
  });
  it("Editar um projeto existente", () => 
  {
    Bussola.EditarUmProjeto(6535);

    Bussola.PreencherDadosBasicoDoProjeto();
    
    Bussola.PreencherResumoDoProjeto();
  });

  it("Cadastrar Dados básicos", () => 
  {
    Bussola.CadastrarNovoProjeto();

    Bussola.PreencherDadosBasicoDoProjeto();

    Bussola.PreencherObjetivosDoProjeto();
   
  });

  it("Cadastrar Resumo do projeto", () => 
  {

    cy.visit("https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/resumo");

    Bussola.PreencherResumoDoProjeto();
  });
   
   
  it.only("Cadastrar objetivos", () => 
  {
    cy.visit("https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/objetivos");
    Bussola.PreencherObjetivosDoProjeto();
  });
});
