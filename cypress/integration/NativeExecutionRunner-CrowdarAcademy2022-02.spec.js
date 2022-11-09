Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
// NativeExecutionRunner-CrowdarAcademy2022-02.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('Llenado y envío de formulario en DemoQA', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/');
  cy.get('.category-cards > :nth-child(2)').click();
  cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
  cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
  cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
  cy.get('#firstName').clear();
  cy.get('#firstName').type('123456');
  cy.get('#lastName').clear();
  cy.get('#lastName').type('456789');
  cy.get('#userEmail').clear();
  cy.get('#userEmail').type('789@456.net');
  cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click();
  cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
  cy.get('#gender-radio-3').check();
  cy.get('#userNumber').clear();
  cy.get('#userNumber').type('123456789');
  cy.get('#subjectsInput').type('qwerty');
  cy.get('#hobbiesWrapper > .col-md-9').click();
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
  cy.get('#hobbies-checkbox-3').check();
  cy.get('#currentAddress').clear();
  cy.get('#currentAddress').type('{enter}');
  cy.get('#submit').click({force: true});
  cy.get('#example-modal-sizes-title-lg').contains("Thanks for submitting the form");
  /* ==== End Cypress Studio ==== */
});
