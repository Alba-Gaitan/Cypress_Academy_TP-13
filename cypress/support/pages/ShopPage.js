Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
/// <reference types="cypress"/>
import ShopLocators from "../../fixtures/locators/ShopLocators.json";

class ShopPage {
  visitarPagina = () =>{
    cy.visit('/shop/');
  }

  verificarPaginaShop = () => { //verifica que la pagina Shop cargue correctamente
    cy.get(ShopLocators.shopBradcrum).should('be.visible');
  };
  
  slidePrecio = () => {
    cy.get(ShopLocators.priceSlider)
    .invoke("val", 23000)
    .trigger("change")
    .click({ force: true })
  };

  slidePrecioMayor = () => {
  const currentValue  = 20000;
  const targetValue = 35000;
  const increment = 500;
  const steps = (targetValue - currentValue) / increment;
  const arrows = '{rightarrow}'.repeat(steps); 

  cy.get(ShopLocators.priceMax)
    .should('have.attr', 'left: 0%', 20000)
    .type(arrows)

  cy.get(ShopLocators.priceMin)
    .should('have.attr', 'left: 100%', 35000)
  };
  
  clickFiltrarBusqueda = () => {
  cy.get('.price_slider_amount > .button')
  .click({ force: true })
  };
  
  verificarRangoBusquedaShop = () => { 
    cy.get(ShopLocators.rangoBuscar).should('be.visible');
    cy.get(ShopLocators.rangoDesde).should('text', '₹324');
    cy.get(ShopLocators.rangoHasta).should('text', '₹500');
  };
}

export default new ShopPage();
