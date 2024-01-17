/// <reference types="cypress" />

describe('POST - Create a new user', () => {
  context('Happy Path', () => {
    it('should create a new user successfully', function () {
      // Carrega os dados do fixture
      cy.fixture('user.json').then((userData) => {
        
        cy.createUser(userData).then((response) => {
          
          // Usa o comando validateResponse para realizar as verificações comuns
          cy.validateResponse(response);

          cy.expect(response.body).to.have.property('id')
          cy.expect(response.body.name).to.equal(userData.name)

        });
      });
    });
  });
});

  