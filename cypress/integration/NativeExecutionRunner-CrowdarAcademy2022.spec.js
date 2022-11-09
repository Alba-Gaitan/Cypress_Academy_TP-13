Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Login Crowdar Cypress Demo", () => {
    it("Login Practice Automation Testing", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "academyCypress_usuarioNormal@crowdaronline.com";
        var pass = "Crowdar.2022!";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
        cy.get('.woocommerce-MyAccount-content > :nth-child(1)').contains("Hello");

    });
});