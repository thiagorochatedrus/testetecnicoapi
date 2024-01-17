// /cypress/support/commands.js

Cypress.Commands.add('getUser', (userId) => {
    return cy.request({
      method: 'GET',
      url: `/users/${userId}`,
    });
  });
Cypress.Commands.add('createUser', (user) => {
    cy.request('POST', '/users', user);
  });
  
Cypress.Commands.add('updateUser', (userId, updatedUser) => {
    cy.request('PUT', `/users/${userId}`, updatedUser);
  });
  
Cypress.Commands.add('deleteUser', (userId) => {
    cy.request('DELETE', `/users/${userId}`);
  });
  
  Cypress.Commands.add('validateHttpStatus', (response, expectedStatusArray) => {
    const validStatusCodes = Array.isArray(expectedStatusArray) ? expectedStatusArray : [expectedStatusArray];
    expect(validStatusCodes.includes(response.status), `Status code ${response.status} is not in the expected list [${validStatusCodes.join(', ')}]`).to.be.true;
  });
  
  
Cypress.Commands.add('validateResponse', (response) => {
  // Validar os headers
  expect(response.headers['content-type']).to.include('application/json');
  
  // Validar o status da resposta
  cy.validateHttpStatus(response,[200, 201]);

  // Validar o tempo de resposta
  cy.expect(response.duration, 'tempo de resposta').to.be.lessThan(1000);
});
