describe('Forms', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234/cardset.html');
    });
  
    // Create Set Form Tests
    describe('Create Set Form', () => {
      it('should create a new set (happy path)', () => {
        cy.get('#setName').type('Test Set');
        cy.get('#createSetButton').click();
        cy.contains('Test Set').should('be.visible');
      });
  
      it('should show an error when creating a set with empty name (unhappy path)', () => {
        cy.get('#createSetButton').click();
        cy.contains('Set name is required').should('be.visible');
      });
  
      it('should handle long set names', () => {
        cy.get('#setName').type('This is a very long set name to test the input field');
        cy.get('#createSetButton').click();
        cy.contains('This is a very long set name to test the input field').should('be.visible');
      });
  
      it('should handle special characters in set names', () => {
        cy.get('#setName').type('Test Set with !@#$%^&*()');
        cy.get('#createSetButton').click();
        cy.contains('Test Set with !@#$%^&*()').should('be.visible');
      });
    });
  
    // Add Card Form Tests
    describe('Add Card Form', () => {
      it('should add a card (happy path)', () => {
        cy.get('#term').type('Term 1');
        cy.get('#description').type('Description 1');
        cy.get('#addCardButton').click();
        cy.contains('Term 1').should('be.visible');
        cy.contains('Description 1').should('be.visible');
      });
  
      it('should show an error when adding a card with empty term (unhappy path)', () => {
        cy.get('#addCardButton').click();
        cy.contains('Term is required').should('be.visible');
      });
  
      it('should show an error when adding a card with empty description (unhappy path)', () => {
        cy.get('#term').type('Term 1');
        cy.get('#addCardButton').click();
        cy.contains('Description is required').should('be.visible');
      });
  
      it('should handle long terms and descriptions', () => {
        cy.get('#term').type('This is a very long term to test the input field');
        cy.get('#description').type('This is a very long description to test the input field');
        cy.get('#addCardButton').click();
        cy.contains('This is a very long term to test the input field').should('be.visible');
        cy.contains('This is a very long description to test the input field').should('be.visible');
      });
  
      it('should handle special characters in terms and descriptions', () => {
        cy.get('#term').type('Term with !@#$%^&*()');
        cy.get('#description').type('Description with !@#$%^&*()');
        cy.get('#addCardButton').click();
        cy.contains('Term with !@#$%^&*()').should('be.visible');
        cy.contains('Description with !@#$%^&*()').should('be.visible');
      });
    });
  });