const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
require('dotenv').config();
setHeadlessWhen(process.env.HEADLESS);

const { generateTestData } = require('./generateTestData');

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.automationexercise.com',
      show: true,
      // windowSize: '1920x1080',
    },


  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output/allure-results'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'my-codecept-project',
  
  mocha: {
    retries: 1
  }
}