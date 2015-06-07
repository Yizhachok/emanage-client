To make e2e tests run terminal in root of project and start the webdriver server:

`npm run-script webdriver-manager update` - make sure that all dependencies are installed and updated

`npm run-script webdriver-manager start` - start webdriver server

Then in another terminal write:

`npm run-script test-protractor`