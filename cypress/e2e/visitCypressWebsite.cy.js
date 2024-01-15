describe('Visit Cypress Website', () => {

  it('should scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number', () => {
    // Visit the Cypress homepage
    cy.visitHomePage();
  
    // Scroll down to the element with the text "Loved by OSS, trusted by Enterprise"
    const textToCheck = 'Loved by OSS, trusted by Enterprise';
    cy.contains(textToCheck).scrollIntoView();
  
    // Verify the presence of the weekly downloads information
    const weeklyDownloadsText = 'Weekly downloads';
    cy.contains(weeklyDownloadsText).should('exist');
  
    // Verify that there is some content (non-empty text) within the weekly downloads element
    cy.get('.grow').should('contain', Cypress.$('.grow').text());
  });
  

  it('should be able to click on Company and then on “About Cypress”', () => {
    // Visit the Cypress homepage
    cy.visitHomePage();

    // Navigate to the "Company" section
    cy.contains('Company ').should('be.visible').click();

    // Hover over the "Company" section
    cy.contains('Company ').trigger('mouseover');

    // Wait for the "About Cypress" text to be present and then click
    cy.contains('About Cypress ').should('be.visible').click();

    // Assert that you are on the correct URL for "About Cypress"
    cy.url().should('include', '/about-us');

    // Add any additional assertions for the "About Cypress" page if needed
});

it('should be able to click on “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev”"', () => {
  // Set a wider viewport to make the "Install" button visible
  cy.viewport(1200, 800);

  // Visit the Cypress homepage
  cy.visitHomePage();

  // Click on the "Install" menu item to open the pop-up
  cy.contains(' Install ').click();

  // Click on the "npm install cypress" button in the pop-up
  cy.contains('npm install cypress').click();

  // Use clipboard commands to get the copied text and assert its correctness
  cy.assertValueCopiedToClipboard('npm install cypress --save-dev');
});

it('should navigate to "Visual Review" under the "Product" section', () => {
  // Visit the Cypress homepage
  cy.visitHomePage();

  // Hover over the "Product" section to reveal the submenu
  cy.contains('Product').trigger('mouseover');

  // Click on "Visual Review" within the "Product" submenu
  cy.contains('Visual Review').click();

  // Assert that you are on the correct page using the specific section id
  cy.get('#visual_reviews')
    .should('exist')
    .and('contain.text', 'Visual Reviews');

  // You can add additional assertions or verifications as needed
});

it('should be able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics”', () => {
  // Visit the Cypress homepage
  cy.visitHomePage();

  // Hover over the "Product" section to reveal the submenu
  cy.contains('Product').trigger('mouseover');

  // Click on "Smart Orchestration" within the "Product" submenu
  cy.contains('Smart Orchestration').click();

  // Scroll down to "Test Analytics" using the section ID, has to offset to make button green
  cy.get('#test_analytics').scrollIntoView({ offset: { top: 150, left: 0 } });

  // Verify that the border color of the "Test Analytics" button changes to green
  cy.get('a[href="#test_analytics"]')
    .should('have.css', 'border-color', 'rgb(163, 231, 203)');

  // You can add additional assertions or verifications as needed
});
});
