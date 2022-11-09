
/// <reference types="cypress" />

import HomeLocators from "../../fixtures/locators/HomeLocators.json"

class HomePage{
    verificarHome = () => {
        cy.get(HomeLocators.tituloHome).should('be.visible');
        cy.get(HomeLocators.tituloHome).should('contain.text', 'Hello');
    }

    clickBotonStoreShop = () => {
        //cy.wait(800);
        //cy.get(HomeLocators.btnGoToShop, {timeout:10000}).should('be.visible');
        //cy.get(HomeLocators.btnGoToShop, {timeout:10000}).click({force: true});
        //cy.get(HomeLocators.btnGoToShop).should('be.visible');
        cy.get(HomeLocators.btnGoToShop).click({force: true});
    }

    clickBtnSesion = () => {
        cy.get(HomeLocators.btnLogout).click({force: true});
    }

}

export default new HomePage();