// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Steps Test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('h1')
      .assert.containsText('h1', 'Steps!!')
      .end()
  }
}
