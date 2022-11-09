import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../../../support/pages/HomePage";
import ShopPage from "../../../../support/pages/ShopPage";


When('Ingreso al shop', () => {
    HomePage.clickBotonStoreShop();
})

And('Busco por rango de precio, de medio a mayor', () => {
    ShopPage.slidePrecio();
})

And('Ingreso al rango de busqueda marcada', () => {
    ShopPage.clickFiltrarBusqueda();
})

And('Verifico que ingreso al rango de busqueda deseada', () => {
    ShopPage.verificarRangoBusquedaShop();
})

