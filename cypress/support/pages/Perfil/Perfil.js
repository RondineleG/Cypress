const el = require('./elements').ELEMENTS;

class Perfil {

    preencherDados() {
        cy.get(el.menu).click();
        cy.get(el.openMenu).click();
    }


}

export default new Perfil();