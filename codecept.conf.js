const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://wpuf.ajaira.website/',
      browser: 'chrome',
      // port: 4444,
      // restart: true,
      // smartWait: 5000,
      // timeouts: {
      //    "script": 60000,
      //    "page load": 10000
      //  },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'wp-user-frontend',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}