import { faker } from "@faker-js/faker";

let accessToken;

describe('Cenário teste api token', () => {
  beforeEach(() => {
    const dataLogin = {
        email: `${Cypress.env('email')}`,
        password: `${Cypress.env('password')}`
    }
    
    cy.api_login(dataLogin).then(response => {
        console.log(response.body.access_token)
        cy.task('saveAccessToken', response.body.access_token)
    })
});
  it.only('scenario 1', () => {

      cy.request({
          method: 'GET',
          url: '/me',
          headers: { 
              authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNGM4OTAyNDUzMzk5OGIxZDI3OGU2NjhmYzkwMzFjMzY3NmQ5OWE3YTMzNGE0NTZlMzk0OGYyNzRkZGYyZDZlYWM1ZTA0N2ZiYzE5NTMxMzciLCJpYXQiOjE2Nzk2MDk2MzEuNjA4MTQ2LCJuYmYiOjE2Nzk2MDk2MzEuNjA4MTQ3LCJleHAiOjE2Nzk2OTYwMzEuNTk4MjY2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m_beRwNHHwxz9RD5ny1a9iVuJEDFINxmHSPxZFEbgj6Htt9WPJXJV8fpuAYNFD0lZgpqGED_uzmZ90mkIWmI-_7qp_6U5TkW7z-H4l0dVPcT8m7hSC9uEFdXpef6kCa74EMQGpeX-sRUGnQD_2HrwiJJTX-T-Yuo1RPMtwCINWXlFtac63Wyi80R8KwGM3OAJQZfKvazD1LBx2_vNFhMkZtRYblgk4x7iyIhGiF3VScKXBwdyCa1R7c4IOSS3-eV0zpUs5LmceuW0slIAsK-QdX9rCeN7ahFywuh23KArxrf5JcUIzoIY1LncA5kNmSKCshRA2We8KqbDK-Ti3JmCL56GnjR7fhRr2c2opgB8pF_D_GNkttiGukDCVJct2RQr8onwa9h0DbC2CwQJK5VhCI8FehvaD1Bdu7dgbU7eDqQg1aCUp_r0jetVLmvbZUDl47BNMI0D27UO1-TfHp8fNZfqxFFHkLMr6LTcdnZavLPs4_IgIBsmd0dBHKGw-SdjBWQVQVsaviiTM63zg74TFSBoj9dCJG2tkRsoiESPns7yU21YzYuIUw_FJFrBPWsUVbvx4LTFIzWNEiseeUn3eO_4ycmlRdQ3p9zfbpadW6BtO1XxFHjK-SBkoGDGYTcsFK6JCIVm8KTVkMAQbWryrp2zUR_fN_afk0O2hlENnE`
          },
      }).then(response => {
          expect(response.status).to.eq(200)
      })

  });
});