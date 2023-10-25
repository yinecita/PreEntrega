export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.passInput = '#pass';
        this.clickLoginButton = '#submitForm';
    };

    typingUsername(username) {
        cy.get(this.userInput).type(username);
    };

    typingPassword(password) {
        cy.get(this.passInput).type(password);
    };

    clickingLoginButton() {
        cy.get(this.clickLoginButton).click();
    };
};