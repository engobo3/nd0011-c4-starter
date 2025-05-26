// cypress/e2e/form.cy.js

describe('Forms Functionality on Card Set Page', () => {
    beforeEach(() => {
      // 1. Start from the main application entry point (homepage)
      cy.visit('http://localhost:1234');
  
      // 2. Navigate to the Card Set page using the menu link
      // Ensure 'Card Set' is the exact text of your navigation link.
      cy.contains('Card Set').should('be.visible').click();
  
      // 3. Verify that the URL has changed and the main heading of the Card Set page is present.
      // IMPORTANT: Replace 'h2' and 'Card Sets' with the actual selector and text
      // found during your manual verification of the cardset.html page.
      cy.url().should('include', '/cardset.html');
      cy.get('h2').should('be.visible').and('contain', 'Card Sets'); // <-- Adjust this line if needed!
    });
  
    // --- Create Set Form Tests ---
    describe('Create Set Form', () => {
      // This beforeEach ensures the Create Set Form is visible before each test in this block
      beforeEach(() => {
        // Manual Check: Is there a button that toggles the visibility of the Create Set Form?
        // If YES, uncomment and adjust the line below to click it:
        // cy.contains('Create New Set').should('be.visible').click(); // Example: if button text is 'Create New Set'
        // cy.get('#createSetToggleButton').should('be.visible').click(); // Example: if button has specific ID
  
        // Now, ensure the form's main input is visible before proceeding with tests.
        cy.get('#setName').should('be.visible');
      });
  
      it('should create a new set (happy path)', () => {
        cy.get('#setName').type('Test Set from Cypress');
        cy.get('#createSetButton').should('be.visible').click();
        cy.contains('Test Set from Cypress').should('be.visible'); // Assert on the created set's display
      });
  
      it('should show an error when creating a set with empty name (unhappy path)', () => {
        cy.get('#createSetButton').should('be.visible').click();
        cy.contains('Set name is required').should('be.visible'); // Assert on the specific error message
        cy.get('#setName').should('have.class', 'error'); // Optional: check if an error class is applied
      });
  
      it('should handle long set names', () => {
        const longName = 'This is a very long set name to test the input field and display truncation if any.';
        cy.get('#setName').type(longName);
        cy.get('#createSetButton').should('be.visible').click();
        cy.contains(longName.substring(0, 50)).should('be.visible'); // Assert on possibly truncated or full name
      });
  
      it('should handle special characters in set names', () => {
        const specialCharName = 'Test Set with !@#$%^&*()_+-=[]{};:"\\|,.<>/?`~';
        cy.get('#setName').type(specialCharName);
        cy.get('#createSetButton').should('be.visible').click();
        cy.contains(specialCharName).should('be.visible');
      });
    });
  
    // --- Add Card Form Tests ---
    describe('Add Card Form', () => {
      // This beforeEach ensures the Add Card Form is visible before each test in this block
      beforeEach(() => {
        // Manual Check: Is there a button that toggles the visibility of the Add Card Form?
        // If YES, uncomment and adjust the line below to click it:
        // cy.contains('Add New Card').should('be.visible').click(); // Example: if button text is 'Add New Card'
        // cy.get('#addCardToggleButton').should('be.visible').click(); // Example: if button has specific ID
  
        // Ensure the form's main input is visible before proceeding with tests.
        cy.get('#term').should('be.visible');
      });
  
      it('should add a card (happy path)', () => {
        cy.get('#term').type('Term 1 for Cypress');
        cy.get('#description').type('Description 1 for Cypress');
        cy.get('#addCardButton').should('be.visible').click();
        cy.contains('Term 1 for Cypress').should('be.visible');
        cy.contains('Description 1 for Cypress').should('be.visible');
      });
  
      it('should show an error when adding a card with empty term (unhappy path)', () => {
        cy.get('#addCardButton').should('be.visible').click(); // Click without typing term
        cy.contains('Term is required').should('be.visible');
        cy.get('#term').should('have.class', 'error'); // Optional: check error class
      });
  
      it('should show an error when adding a card with empty description (unhappy path)', () => {
        cy.get('#term').type('Term with no description'); // Provide a term
        cy.get('#addCardButton').should('be.visible').click(); // Click without typing description
        cy.contains('Description is required').should('be.visible');
        cy.get('#description').should('have.class', 'error'); // Optional: check error class
      });
  
      it('should handle long terms and descriptions', () => {
        const longTerm = 'A very very very very long term to ensure the input field handles extended text without issues.';
        const longDescription = 'An equally lengthy description to test the text area capacity and presentation.';
        cy.get('#term').type(longTerm);
        cy.get('#description').type(longDescription);
        cy.get('#addCardButton').should('be.visible').click();
        cy.contains(longTerm.substring(0, 50)).should('be.visible'); // Assert on possibly truncated or full text
        cy.contains(longDescription.substring(0, 50)).should('be.visible');
      });
  
      it('should handle special characters in terms and descriptions', () => {
        const specialTerm = 'Term [!@#$] {} ()';
        const specialDesc = 'Desc &^*%_<>';
        cy.get('#term').type(specialTerm);
        cy.get('#description').type(specialDesc);
        cy.get('#addCardButton').should('be.visible').click();
        cy.contains(specialTerm).should('be.visible');
        cy.contains(specialDesc).should('be.visible');
      });
    });
  });