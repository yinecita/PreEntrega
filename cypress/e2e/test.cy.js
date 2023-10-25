/// <reference types="cypress"/>

import { LoginPage } from "../support/pages/loginPage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";

const constants = require('../support/constants');

describe('PreDelivery Test - Yinet', () => {
    let data;
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();

    before('LoadingData', () => {
        cy.fixture('myFixture').then(myFixtureParams => {
            data = myFixtureParams;
        });
    });

    beforeEach('Preconditions', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        loginPage.typingUsername(Cypress.env('username'));
        loginPage.typingPassword(Cypress.env('password'));
        loginPage.clickingLoginButton();
        cy.get('#onlineshoplink', { timeout: constants.TIMEOUT }).should('exist');
        cy.get('#onlineshoplink').click();
    });

    it('Adding products, Checking names, prices and total', () => {
        productsPage.addingProductsToCart();
        cy.get('#goShoppingCart').click();
        cy.get('#title').should('exist');
        shoppingCartPage.checkingProductsNames('product1').should('have.text', data.product1.name);
        shoppingCartPage.checkingProductsNames('product2').should('have.text', data.product2.name);
        shoppingCartPage.checkingProductsPrices('product1').should('have.text', '$' + data.product1.price.toString());
        shoppingCartPage.checkingProductsPrices('product2').should('have.text', '$' + data.product2.price.toString());
        cy.contains('Show total price').click();
        cy.get('#price').should('have.text', data.product1.price + data.product2.price);
    });
});