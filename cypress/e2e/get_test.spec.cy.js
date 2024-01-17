/// <reference types="cypress" />

describe('GET User Endpoint', () => {
  it('should return user details', () => {
    // Faz a requisição GET para obter os detalhes do usuário 1 usando o comando
    cy.getUser(1).then((response) => {
      // Validar o status da resposta
      cy.validateHttpStatus(response, 200)
      
      cy.validateResponse(response)

      // Validar os dados do usuário
      cy.expect(response.body.id).to.equal(1)
      cy.expect(response.body.name).to.equal('Leanne Graham')
      cy.expect(response.body.email).to.equal('Sincere@april.biz')
    });
  });
});
