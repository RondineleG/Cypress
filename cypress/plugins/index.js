const cucumber = require('cypress-cucumber-preprocessor').default

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// /**
//  * @type {Cypress.PluginConfig}
//  */
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }


module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}


module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};