const { defineConfig } = require("cypress");

let accessToken

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://laravel-json-api-pro.creative-tim.com/api/v2',
    env: {
      hideCredentials: true,
      requestMode: true,
      setupNodeEvents (on, config) {
        on('task', {
          saveAccessToken(access_token){
            accessToken = access_token
            return accessToken
          },
          getAccessToken(){
            return accessToken
          }
        })
        return config
      }
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
});
