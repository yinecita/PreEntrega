export class ShoppingCartPage {
    constructor() {
        this.products = {
            "product1": {
                "label": '#productName[name="White Pants"]',
                "price": `//p[text()='White Pants']//following-sibling::p`,
            },
            "product2": {
                "label": '#productName[name="White Shoes"]',
                "price": `//p[text()='White Shoes']//following-sibling::p`,
            }
        }
    };

    checkingProductsNames(product) {
        return cy.get(this.products[product].label);
    }

    checkingProductsPrices(product) {
        return cy.xpath(this.products[product].price);
    }
};