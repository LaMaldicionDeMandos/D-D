// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'App Test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('body', 5000)
      .assert.title('Dungeons & Dragons')
      .assert.elementPresent('h1')
      .end()
  }
}
