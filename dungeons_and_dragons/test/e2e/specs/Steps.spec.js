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
      .elements('css selector', 'div.bs-wizard-stepnum', function iter(elems) {
        elems.value.forEach(function(element, i) {
          browser.elementIdText(element.ELEMENT, function(result){
            if (i < 5) browser.assert.equal(result.value,`Paso ${i+1}`)
            else browser.assert.equal(result.value,'Fin')
          })
        })
      })
      .end()
  }
}
