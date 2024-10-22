const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:bundleId': 'com.svelte.app',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  console.log('Open App');

  await driver.pause(5000);
  
  const pageSource = await driver.getPageSource();
  console.log(pageSource);

  const textField = await driver.$('//XCUIElementTypeTextField[@value="Enter a name..."]');

  await textField.clearValue();
  await textField.setValue('Test User');
  console.log('Text entered successfully');

  await driver.pause(1000);

  const greetButton = await driver.$('//XCUIElementTypeButton[@name="Greet"]');

  await greetButton.click();
  console.log('Button clicked successfully');

  await driver.terminateApp('com.react.app');
  await driver.pause(1000);
  await driver.deleteSession();
}

runTest().catch(console.error);