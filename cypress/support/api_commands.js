import { faker } from "@faker-js/faker";


Cypress.Commands.add('api_login', dataLogin => {
    cy.request({
      method: 'POST',
      url: `/login`,
      body: {
        email: dataLogin.email,
        password: dataLogin.password
      },
    })
  })