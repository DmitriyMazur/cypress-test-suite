// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitHomePage', () => {
    // Use the base URL from the Cypress configuration
    const baseUrl = Cypress.config('baseUrl');

    // Visit the home page by appending the path to the base URL
    cy.visit(baseUrl);

    // Adding assertions to check the URL and title
    cy.url().should('eq', `${baseUrl}/`);
    cy.title().should('eq', 'JavaScript Component Testing and E2E Testing Framework | Cypress');
});


Cypress.Commands.add('assertValueCopiedToClipboard', value => {
    cy.window().then(win => {
        return new Cypress.Promise((resolve, reject) => {
            win.navigator.clipboard.readText().then(text => {
                if (text === value) {
                    resolve();
                } else {
                    reject(`Expected clipboard value: ${value}, Actual clipboard value: ${text}`);
                }
            });
        });
    });
});