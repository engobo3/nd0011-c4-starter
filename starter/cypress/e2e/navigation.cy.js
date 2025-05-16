describe('Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
    });
  
    it('should navigate to Card Set page', () => {
      cy.contains('Card Set').click();
      cy.url().should('include', '/cardset.html');
      cy.get('h2').should('contain', 'Card Sets'); // Verify content on the page
    });
  
    it('should navigate to About page', () => {
      cy.contains('About').click();
      cy.url().should('include', '/about.html');
      cy.get('h2').should('contain', 'About Study Night'); // Verify content on the page
    });
  
    it('should navigate to Home page', () => {
      cy.contains('Home').click();
      cy.url().should('eq', 'http://localhost:1234/');
      cy.get('h1').should('contain', 'Study Night'); // Verify content on the page
    });
  
    it('should maintain active link styling', () => {
      cy.contains('Card Set').click();
      cy.get('nav li a.active').should('contain', 'Card Set'); // Verify active link styling
      cy.contains('About').click();
      cy.get('nav li a.active').should('contain', 'About');
      cy.contains('Home').click();
      cy.get('nav li a.active').should('contain', 'Home');
    });
  
    it('should handle direct URL navigation', () => {
      cy.visit('http://localhost:1234/cardset.html');
      cy.get('h2').should('contain', 'Card Sets');
      cy.visit('http://localhost:1234/about.html');
      cy.get('h2').should('contain', 'About Study Night');
    });
  });