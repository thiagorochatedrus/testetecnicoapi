/// <reference types="cypress" />

describe('PUT - Update an existing user', () => {
  it('should update an existing user successfully', function () {
    // Carrega os dados do fixture para a atualização
    cy.fixture('user.json').then((updatedUserData) => {
      // Chama o comando updateUser para editar o usuário com ID 3
      cy.updateUser(3, updatedUserData).then((updateResponse) => {

        cy.validateResponse(updateResponse)


      });
    });
  });
});
