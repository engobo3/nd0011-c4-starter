// cypress/e2e/navigation.cy.js
describe('Navigation Spec Check', () => {
    it('should be able to visit the homepage', () => {
      cy.visit('http://localhost:1234/');
      cy.url().should('eq', 'http://localhost:1234/');
    });
  });