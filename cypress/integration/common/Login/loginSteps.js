import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/pages/LoginPage'
import HomePage from "../../../support/pages/HomePage";


Given('Me logueo como usuario correctamente', () => {
    cy.fixture('examples/LoginExample.json').then((json) => {
        LoginPage.visitarPagina();
        LoginPage.doLogin(json);
       

    })
})

Given('Me logueo como admin correctamente', () => {
    cy.fixture('examples/LoginAdminExample.json').then((json) => {
        LoginPage.visitarPagina();
        LoginPage.doLoginAdmin(json);

    })
})

Given('Navego al sitio automationtesting', () => {
    LoginPage.visitarPagina();     
})

When('Me logueo como usuario con user {string} y pass {string}', (user,pass) => {
    LoginPage.doLoginScenarioOutline(user,pass);
})

Then('Valido saludo de bienvenida en el Título', () => {
    HomePage.verificarHome();     
})

Given('Hago click en cerrar sesion', () => {
    HomePage.clickBtnSesion();     
})

Then('verifico que la sesion se cerro correctamente', () => {
    LoginPage.verificarCerrarSesion();     
})


