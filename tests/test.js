
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://sharepicgenerator.de/wordpress');
        await driver.wait(until.titleIs('Titel'), 1000);
        console.log("passed");
    } catch( error ){
        const core = require('@actions/core');
        core.setFailed(error.message);
    } finally {
        await driver.quit();
    }
})();