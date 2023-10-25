export class ProductsPage {
    constructor() {
        this.clickWhitePantsAddToCartButton = `//img[@src="/whitePants.png"]//following-sibling::button`;
        this.clickWhiteShoesAddToCartButton = `//img[@src="/whiteShoes.png"]//following-sibling::button`;
        this.clickCloseModalButton = '#closeModal';
    };

    addingProductsToCart() {
        cy.xpath(this.clickWhitePantsAddToCartButton).click();
        cy.get(this.clickCloseModalButton).click();
        cy.xpath(this.clickWhiteShoesAddToCartButton).click();
        cy.get(this.clickCloseModalButton).click();
    };
};