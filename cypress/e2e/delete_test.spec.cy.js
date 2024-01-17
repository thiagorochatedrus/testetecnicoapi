/// <reference types="cypress" />

describe('DELETE - Delete an existing user', () => {
  it('should delete an existing user successfully', function () {
    cy.deleteUser(8).then((deleteResponse) => {
      cy.validateResponse(deleteResponse)
    });
  });
});
