import Login from '../support/pages/Login/Login'

describe('Cadasrar', function() {
  
    beforeEach(function() {
        cy.login();
    })

it.only('Cadastrar Dados básicos',function(){
   
    cy.get('nav > .nav > li:nth-child(2) > .menu-link').click();
    cy.get('.dropdown-menu-caixa-submenu-2 > .informacoes-wrapper:nth-child(2) .btn').click();
    cy.url().should('contains', 'https://app.bussolasocial.com.br/projeto-novo/cadastro');

    cy.get('#nome').click();
    cy.get('#nome').type('Benedito e Tatiane Assessoria Jurídica ME');
    cy.get('#data_inicial').click();
    cy.get('#data_inicial').type('01/01/2020');
    cy.get('#data_final').type('31/10/2020');
    cy.get('.active:nth-child(7)').click();


    cy.get('.col-md-7 > .form-group > * > .btn-group > .btn > .bs-caret > .bs-caret-container > .fa').click();
    cy.get('.col-md-7 > .form-group > * > .btn-group > .open > .dropdown-menu > .selected > * > .text').click();
    cy.get('.programa .filter-option').click();
    cy.get('.col-xs-12 > .form-group li:nth-child(2) .text').click();
    cy.get('.count-element > .form-control').click()
    cy.get('.count-element > .form-control').type('Benedito e Tatiane Assessoria Jurídica ME');
    
   
    cy.get('.hover > .iCheck-helper').click();
    cy.get('.hover > .iCheck-helper').click();
    
    cy.get('#responsavel\[nome\]').click();
    cy.get('#responsavel\[nome\]').type('Benedito e Tatiane Assessoria Jurídica ME');
    cy.get('#responsavel\[email\]').type('atendimento@beneditoetatianeassessoriajuridicame.com.br');
    cy.get('#responsavel\[email\]').click();
    cy.get('.telefone').click();
    cy.get('.telefone').type('(33) 3333-3335');
    cy.get('.bs-placeholder > .filter-option').click();
    cy.get('.m-b-n-xs li:nth-child(2) .text').click();
    cy.get('.btn-lg').click();
    cy.get('#form-projeto-cadastra').submit();
    cy.url().should('contains', 'https://app.bussolasocial.com.br/projeto-novo/6537/cadastro/resumo');
    
});

    it.skip('Cadastrar projeto', function() {
        
        cy.get('#bs-example-navbar-collapse-1 > nav > .nav > li:nth-child(2) > .menu-link').click()
    
        cy.get('.dropdown-menu > .dropdown-menu-caixa-submenu-2 > .informacoes-wrapper:nth-child(2) > .informacoes-internas > .btn').click()
     
        cy.visit('https://app.bussolasocial.com.br/projeto-novo/cadastro')
     
        cy.get('#nome').click()
     
        cy.get('#nome').type('Benedito e Tatiane Assessoria Jurídica ME')
     
        cy.get('#data_inicial').click()
     
        cy.get('#data_inicial').type('01/01/2020')
     
        cy.get('#data_final').click()
     
        cy.get('#data_final').type('31/10/2020')
      
        cy.get('.col-xs-12 > .form-group > div > .btn-group > .btn > .filter-option').click()
     
        cy.get('.col-xs-12 > .form-group > div > .btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(2) > a > .text').click()
     
        cy.get('.col-xs-12 > .form-group > div > .btn-group > #programa_id').select('356')
     
        cy.get('.row > .col-xs-12 > .count-element > .count-element > .form-control').click()
     
        cy.get('.form-group > div > .hover > .iradio_square-custom > .iCheck-helper').click()
     
        cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
     
        cy.get('.col-xs-12 > .row > .col-xs-12:nth-child(1) > .form-group > div').click()
     
        cy.get('.row > .col-xs-12:nth-child(1) > .form-group > div > .checkbox:nth-child(4)').click()
     
        cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
     
        cy.get('#responsavel\[nome\]').click()
     
        cy.get('#responsavel\[nome\]').type('Benedito e Tatiane Assessoria Jurídica ME')
     
        cy.get('#responsavel\[email\]').type('atendimento@beneditoetatianeassessoriajuridicame.com.br')
     
        cy.get('.telefone').click()
     
        cy.get('.telefone').type('(33) 3333-3335')
     
        cy.get('#form-projeto-cadastra').submit();
     
    });
   
    it('Cadastrar resumo do projeto', function() {

        cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/resumo')
    
       cy.get('.m-b-20 > .row > .col-xs-12 > .count-element > .form-control').click()
    
       cy.get('#form-projeto-cadastra > .form-cadastro-projeto > .row > .col-xs-12 > .btn').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(3) > a').click()
    

    });

    it('Cadastrar objetivos', function() {

        cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/objetivos')
    
        cy.get('.row > .col-xs-12 > .form-group > div > #objetivo_geral').click()
     
        cy.get('.sortable-grupo-lista-item > .row > .col > .row > .col > .count-element > .count-element > .width-100').click()
     
        cy.get('.sortable-grupo-lista-item > .row > .col-auto > .btn:nth-child(1) > .fas').click()
     
        cy.get('.col > .count-element > .count-element > .count-element > .width-100').click()
     
        cy.get('.col > .count-element > .count-element > .count-element > .width-100').click()
     
        cy.get('#form-projeto-cadastra-objetivos > .row > .row > .col-auto > .btn').click()
     
        cy.get('.sortable-grupo-lista-item-clone:nth-child(1) > .row > .col > .row > .col > .count-element > .count-element > .count-element > .width-100').click()
     
        cy.get('.sortable-grupo-lista-item:nth-child(2) > .row > .col > .row > .col > .count-element > .count-element > .count-element > .width-100').click()
     
        cy.get('.count-element > .count-element > .count-element > .count-element > .width-100').click()
     
        cy.get('body > #toast-container > .toast > .toast-message').click()
     
        cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(4) > a').click()
     

    });
    
    it('Cadastro de planos', function() {

        cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/planos')
    
       cy.get('#objetivo-17058 > .m-0 > .m-b-3 > .flex > .bg-branco > .row > .col-12 > .btn').click()
    
       cy.get('#form-objetivo-17058 > .row > .col-12:nth-child(2) > .bg-branco > .form-control').click()
    
       cy.get('#form-objetivo-17058 > .row > .col-12:nth-child(3) > .bg-branco > .form-control').click()
    
       cy.get('#form-objetivo-17058 > .row > .col-auto > .bg-branco > .row > .col-12 > .input-group > .form-control').click()
    
       cy.get('body > .daterangepicker:nth-child(24) > .drp-buttons > .applyBtn').click()
    
       cy.get('#form-objetivo-17058 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) > .col-12:nth-child(1) .fa:nth-child(1)').click()
    
       cy.get('#form-objetivo-17058 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) li:nth-child(3) .text:nth-child(1)').click()
    
       cy.get('.periodo-monitoramento > .row > .col-12 > .open > #monitoramento').select('SE')
    
       cy.get('.row > .col-xs-12 > #planosAcordion > .panel > .grupo-custom-collapse-titulo:nth-child(3)').click()
    
       cy.get('.main-content > .bg-branco > .form-cadastro-projeto > .row:nth-child(3) > .col-xs-12').click()
    
       cy.get('#objetivo-17059 > .m-0 > .m-b-3 > .flex > .bg-branco > .row > .col-12 > .btn').click()
    
       cy.get('#form-objetivo-17058 > .row > .flex-1 > .height-100 > .btn > .fas').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('#form-objetivo-17059 > .row > .col-12:nth-child(2) > .bg-branco > .form-control').click()
    
       cy.get('#form-objetivo-17059 > .row > .col-12:nth-child(3) > .bg-branco > .form-control').click()
    
       cy.get('#form-objetivo-17059 > .row > .col-auto > .bg-branco > .row > .col-12 > .input-group > .form-control').click()
    
       cy.get('body > .daterangepicker:nth-child(30) > .drp-buttons > .applyBtn').click()
    
       cy.get('#form-objetivo-17059 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) > .col-12:nth-child(1) .fa:nth-child(1)').click()
    
       cy.get('#form-objetivo-17059 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) li:nth-child(3) .text:nth-child(1)').click()
    
       cy.get('.periodo-monitoramento > .row > .col-12 > .open > #monitoramento').select('SE')
    
       cy.get('#form-objetivo-17059 > .row > .flex-1 > .height-100 > .btn > .fas').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(5) > a').click()
    

    });

    

   
    it('Cadastro de justificativa', function() {      
       
             
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/justificativa')
    
       cy.get('.border-0 > .row > .col-xs-12 > .count-element > .count-element > .form-control').click()
    
       cy.get('.m-b-20 > .row > .col-xs-12 > .count-element > .count-element > .form-control').click()
    
       cy.get('#form-projeto-cadastra > .form-cadastro-projeto > .row > .col-xs-12 > .btn').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(7) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/indicadores')
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.form-group > div > .checkbox:nth-child(2) > label > .indicador').click()
    
       cy.get('.form-group > div > .checkbox:nth-child(2) > label > .indicador').check('20')
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.form-group > div > .checkbox:nth-child(7) > label > .indicador').click()
    
       cy.get('.form-group > div > .checkbox:nth-child(7) > label > .indicador').check('25')
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('#div-indicador-20 > .col-xs-12 > .count-element > .count-element > .width-100').click()
    
       cy.get('#div-indicador-25 > .col-xs-12 > .count-element > .count-element > .width-100').click()
    
       cy.get('.bg-branco > #form-projeto-cadastra > .row > .col-xs-12 > .btn').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(8) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/metodologia')
    
       cy.get('.border-0 > .row > .col-xs-12 > .count-element > .count-element > .form-control').click()
    
       cy.get('.m-t-35 > .row > .col-xs-12 > .count-element > .count-element > .form-control').click()
    
       cy.get('#form-projeto-cadastra > .form-cadastro-projeto > .row > .col-xs-12 > .btn').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(9) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/locais')
    
       cy.get('.main-content > .bg-branco > .row > .col-xs-12 > .btn').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').type('Benedito e Tatiane Assessoria Jurídica ME')
    
       cy.get('.col-xs-12 > .form-group > .col-sm-4 > .input-icon > .form-control').type('88095-256')
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #numero').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #numero').type('505')
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #complemento').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #complemento').type('casa b')
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #referencia').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #referencia').type('Milium')
    
       cy.get('.modal-dialog > .modal-content > #form-local > .modal-footer > .btn-primary').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(10) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/sustentabilidade')
    
       cy.get('.m-b-35 > .row > .col-xs-12 > .count-element > .count-element > .form-control').click()
    
       cy.get('.m-b-20 > .row > .col-xs-12 > .count-element > .count-element > .form-control').click()
    
       cy.get('.bg-branco > #form-projeto-cadastra > .row > .col-xs-12 > .btn').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(11) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/orcamento')
    
       cy.get('.main-content > .bg-branco > .row > .col-xs-12 > .btn').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/orcamento/detalhe')
    
       cy.get('.panel > .panel-footer > .flex-row > .col-auto > .btn').click()
    
       cy.get('.p-15 > .flex-row > .col-3:nth-child(1) > .box-destaque > .box-destaque-icon').click()
    
       cy.get('div > .radio > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
       cy.get('.border-0 > .data-table-container > .table > tbody > .sub-categoria').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('0,04')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('0,04')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('0,04')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('0,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('0,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('0,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('4,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('4,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('4,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('43,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('43,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('43,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('434,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('434,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('434,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('4.343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('4.343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('4.343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('43.434,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('43.434,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('43.434,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_1').type('43.434,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_2').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_3').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('0,04')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('0,04')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('0,04')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('0,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('0,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('0,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('4,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('4,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('4,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('43,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('43,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('43,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_4').type('43,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_5').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_6').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_7').type('343,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_8').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_9').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').click()
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('0,03')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('0,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('3,43')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('34,34')
    
       cy.get('.table > tbody > .despesa > .text-right > #valor_17028_2020_10').type('34,34')
    
       cy.get('.data-table-container > .table > tbody > .despesa > .is-right').click()
    
       cy.get('.data-table-container > .table > tbody > .despesa > .is-right').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('section > .row > .col-xs-12 > .m-t-20 > .btn-primary').click()
    
       cy.get('.header-topo > .js-menu-fixed-topo > .menu-ferramentas-topo > .menu-ferramentas-topo-item > .btn').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/orcamento')
    
       cy.get('.bg-branco > #form-projeto-cadastra > .row > .col-xs-12 > .btn').click()
    
       cy.get('.swal2-in > .swal2-container > .swal2-modal > .swal2-confirm').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/orcamento')
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(12) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/anexos')
    
       cy.get('.form-banner > #upload-anexo > .dropzone-bussola-inner > .dz-message > .btn').click()
    
       cy.get('body > .dz-hidden-input').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(13) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/videos')
    
       cy.get('.main-content > .bg-branco > .row > .col-xs-12 > .btn').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #nome').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #nome').type('Projeto Junho')
    
       cy.get('.col-xs-12 > .div-video > .form-group > div > #caminho').click()
    
       cy.get('.col-xs-12 > .div-video > .form-group > div > #caminho').type('https://www.youtube.com/watch?v=OKrLUHT940s&list=PLr31JDPl4HpXVvSLvty9N1wkivagLxQJ6')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #descricao').click()
    
       cy.get('.modal-dialog > .modal-content > #form-video > .modal-footer > .btn-primary').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(14) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/equipe')
    
       cy.get('.main-content > .bg-branco > .row > .col-xs-12 > .btn').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > .hover').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').type('Projeto Junho')
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #funcao').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #funcao').type('Administrador')
    
       cy.get('.form-group > .col-sm-3 > .btn-group > .btn > .filter-option').click()
    
       cy.get('.btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(2) > a').click()
    
       cy.get('.col-xs-12 > .form-group > .col-sm-3 > .btn-group > #natureza_vinculo').select('CED')
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #carga_horaria_semanal').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #carga_horaria_semanal').type('25')
    
       cy.get('.form-group > .col-sm-3 > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('.modal-dialog > .modal-content > #form-equipe > .modal-footer > .btn-primary').click()
    
       cy.get('body > #toast-container > .toast > .toast-title').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(15) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/parceiro')
    
       cy.get('.main-content > .bg-branco > .row > .col-xs-12 > .btn').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > .hover').click()
    
       cy.get('.col-xs-12:nth-child(1) > .form-group > div > .btn-group > .btn').click()
    
       cy.get('.col-xs-12:nth-child(1) > .form-group > div > .btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(2) > a > .text').click()
    
       cy.get('.col-xs-12 > .form-group > div > .btn-group > #tipo_parceiro_projeto_id').select('4')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #nome').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #nome').type('Benedito e Tatiane Assessoria Jurídica ME')
    
       cy.get('.row > .col-xs-12 > .form-group > .input-icon > #endereco_cep').type('88095-256')
    
       cy.get('#div-cpf > .col-xs-12 > .form-group > div > #cpf').click()
    
       cy.get('#div-cpf > .col-xs-12 > .form-group > div > #cpf').type('111.111.111-11')
    
       cy.get('.form-group > div > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #valor_investido').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #valor_investido').type('100,00')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #endereco\[numero\]').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #endereco\[numero\]').type('505')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #endereco\[complemento\]').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #endereco\[complemento\]').type('casa')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #endereco\[referencia\]').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #endereco\[referencia\]').type('sasa')
    
       cy.get('.modal-dialog > .modal-content > #form-parceiro > .modal-footer > .btn-primary').click()
    
       cy.get('#div-cpf > .col-xs-12 > .form-group > div > .help-block').click()
    
       cy.get('.form-body > .row > .col-xs-6 > #div-cpf > .col-xs-12').click()
    
       cy.get('#div-cpf > .col-xs-12 > .form-group > div > .help-block').click()
    
       cy.get('.modal-open > #modal-ajax').click()
    
       cy.get('#div-cpf > .col-xs-12 > .form-group > div > #cpf').type('093.590.206-64')
    
       cy.get('#div-cpf > .col-xs-12 > .form-group > div > #cpf').type('093.590.206-65')
    
       cy.get('.modal-dialog > .modal-content > #form-parceiro > .modal-footer > .btn-primary').click()
    
       cy.visit('undefined')
    
       cy.visit('https://www.google.com/search?q=geradr+cpf&rlz=1C1CHBF_enUS923US923&oq=geradr+cpf&aqs=chrome..69i57j0i10i457j0i10l5.4067j0j7&sourceid=chrome&ie=UTF-8')
    
       cy.get('div:nth-child(2) > .rc:nth-child(1) > .yuRUbf > a > .LC20lb > span').click()
    
       cy.visit('https://www.4devs.com.br/gerador_de_cpf')
    
       cy.get('.small-12 > #app-wrapper > #area_botoes > label > #bt_gerar_cpf').click()
    
       cy.get('#app-wrapper > #area_resposta > .output-group > #texto_cpf > .clipboard-copy').click()
    
       cy.get('.modal-open > #modal-ajax').click()
    
       cy.get('#div-cpf > .col-xs-12 > .form-group > div > #cpf').type('174.029.590-07')
    
       cy.get('.modal-dialog > .modal-content > #form-parceiro > .modal-footer > .btn-primary').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(16) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/risco')
    
       cy.get('.main-content > .bg-branco > .row > .col-xs-12 > .btn').click()
    
       cy.get('.form-body > .row > .col-xs-12 > .form-group > #risco').click()
    
       cy.get('.form-body > .row > .col-xs-12 > .form-group > .radio-inline:nth-child(4)').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .radio-inline:nth-child(4) > input').type('M')
    
       cy.get('.form-body > .row > .col-xs-12 > .form-group > #motivo').click()
    
       cy.get('.form-body > .row > .col-xs-12 > .form-group > #motivo').click()
    
       cy.get('.modal-body > .form-body > .row:nth-child(4) > .col-xs-12 > .form-group').click()
    
       cy.get('.form-body > .row > .col-xs-12 > .form-group > #resposta').click()
    
       cy.get('.modal-dialog > .modal-content > #form-risco > .modal-footer > .btn-primary').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(17) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/comunicacao')
    
       cy.get('.main-content > .bg-branco > .row > .col-xs-12 > .btn').click()
    
       cy.get('.form-group > div > .btn-group > .btn > .filter-option').click()
    
       cy.get('.dropdown-menu > .dropdown-menu > li:nth-child(3) > a > .text').click()
    
       cy.get('.col-xs-12 > .form-group > div > .btn-group > #tipo').select('D')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #publico').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #publico').type('1000')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #item').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #item').type('Facebook')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #proposito').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #proposito').type('Atrair novos apoiadores')
    
       cy.get('.row > .col-xs-12 > .form-group > div > #quantidade').click()
    
       cy.get('.row > .col-xs-12 > .form-group > div > #quantidade').type('100')
    
       cy.get('.col-xs-12 > .form-group > div > .input-group > #data_inicial').click()
    
       cy.get('.datepicker-days > .table-condensed > tbody > tr:nth-child(1) > .day:nth-child(5)').click()
    
       cy.get('.col-xs-12 > .form-group > div > .input-group > #data_final').click()
    
       cy.get('.datepicker-days > .table-condensed > tbody > tr:nth-child(4) > .day:nth-child(3)').click()
    
       cy.get('.modal-dialog > .modal-content > #form-comunicacao > .modal-footer > .btn-primary').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(18) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535/cadastro/matriz-avaliacao')
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .bg-branco:nth-child(1) > .b-1').click()
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .bg-branco:nth-child(1) > .b-1').type('1')
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .flex-1:nth-child(2) > .b-1').click()
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .flex-1:nth-child(2) > .b-1').type('O resumo deve conter a essência do projeto, ou seja, deve trazer as linhas gerais, que possibilitem a quem lê um bom entendimento do projeto. Em geral, o resumo apresenta minimamente pra quê o projeto será feito.')
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .flex-1:nth-child(3) > .b-1').click()
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .flex-1:nth-child(3) > .b-1').type('4')
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .flex-1:nth-child(4) > .b-1').click()
    
       cy.get('#objetivo-17058 > #form-objetivo-17058 > .flex > .flex-1:nth-child(4) > .b-1').type('O resumo deve conter a essência do projeto, ou seja, deve trazer as linhas gerais, que possibilitem a quem lê um bom entendimento do projeto. Em geral, o resumo apresenta minimamente pra quê o projeto será feito.')
    
       cy.get('#form-objetivo-17058 > .flex > .bg-branco > .height-100 > .btn').click()
    
       cy.get('.row > .col-xs-12 > #matrizAcordion > .panel > .grupo-custom-collapse-titulo:nth-child(3)').click()
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .bg-branco:nth-child(1) > .b-1').click()
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .bg-branco:nth-child(1) > .b-1').type('1')
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .flex-1:nth-child(2) > .b-1').click()
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .flex-1:nth-child(2) > .b-1').type('O resumo deve conter a essência do projeto, ou seja, deve trazer as linhas gerais, que possibilitem a quem lê um bom entendimento do projeto. Em geral, o resumo apresenta minimamente pra quê o projeto será feito.')
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .flex-1:nth-child(3) > .b-1').click()
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .flex-1:nth-child(3) > .b-1').type('O resumo deve conter a essência do projeto, ou seja, deve trazer as linhas gerais, que possibilitem a quem lê um bom entendimento do projeto. Em geral, o resumo apresenta minimamente pra quê o projeto será feito.')
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .flex-1:nth-child(4) > .b-1').click()
    
       cy.get('#objetivo-17059 > #form-objetivo-17059 > .flex > .flex-1:nth-child(4) > .b-1').type('1')
    
       cy.get('#form-objetivo-17059 > .flex > .bg-branco > .height-100 > .btn').click()
    
       cy.get('body > #toast-container > .toast > .toast-message').click()
    
       cy.get('.menu-ferramentas-topo > .menu-ferramentas-topo-item > .menu-ferramentas-topo-item-link > span > .fa').click()
    
       cy.get('.menu-ferramentas-topo-item > .navbar > .nav > li > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535')
    
       cy.get('.menu-ferramentas-topo > .menu-ferramentas-topo-item > .btn-group > .btn-danger > .caret').click()
    
       cy.get('.menu-ferramentas-topo-item > .open > .dropdown-menu > li > .sweet-confirma-exclusao').click()
    
       cy.get('.swal2-in > .swal2-container > .swal2-modal > .swal2-confirm').click()
    
       cy.get('.swal2-in > .swal2-container > .swal2-modal > .swal2-confirm').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto-novo/6535')
    
       cy.get('.header-topo > .js-menu-fixed-topo > .menu-ferramentas-topo > .menu-ferramentas-topo-item > .btn').click()
    
       cy.get('.swal2-in > .swal2-container > .swal2-modal > .swal2-cancel').click()
    
    })
   
   })