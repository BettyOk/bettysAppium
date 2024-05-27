const dialogPage = require('../pageobjects/dialog.page.js');

// Change to your element's accessibility ID
describe('Dialog', () => {
    it('Verify that the test entry dialog username & password fields are editable', async () => {
        await dialogPage.appBtn.click();
        await dialogPage.alertDialogBtn.click();
        await dialogPage.textEntryDialogBtn.click();
        await dialogPage.userNameField.addValue('Actual User');
        await dialogPage.userNameField.clearValue();
        await dialogPage.userNameField.addValue('Test User');
        await dialogPage.passwordField.clearValue();
        await dialogPage.passwordField.addValue('Test Pass');

        //assertion or verification
        const userName = await dialogPage.userNameField.getText();

        expect(userName).toBe('Test User');

        await dialogPage.dialogOkBtn.click();
    });

})


/*const dialogPage = require('../pageobjects/dialog.page.js');

// Change to your element's accessibility ID
describe('Dialog', async () => {
    it('Verify that the test entry dialog username & password fields are editable', async () => {
        const app = await dialogPage.appBtn;
        app.click();
        const alertDialog = await dialogPage.alertDialogBtn;
        await alertDialog.waitForDisplayed();
        alertDialog.click();
        const textEntryDialog = await dialogPage.textEntryDialogBtn;
        await textEntryDialog.waitForDisplayed();
        textEntryDialog.click();
        const userNameField = await dialogPage.userNameField;
        await userNameField.waitForDisplayed();
        userNameField.addValue('Test User');
        const passwordField = await dialogPage.passwordField;
        await passwordField.waitForDisplayed();
        passwordField.addValue('Test Pass');
    })})*/



/*const dialogPage = require('../pageobjects/dialog.page');
// Change to your element's accessibility ID
describe('Dialog', async () => {
    it('Verify that the test entry dialog username & password fields are editable', async () => {
        const app = await $('~App');
        app.click();
        const alertDialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
        await alertDialog.waitForDisplayed();
        alertDialog.click();
        const textEntryDialog = await $('//android.widget.Button[@content-desc="Text Entry dialog"]')
        await textEntryDialog.waitForDisplayed();
        textEntryDialog.click();
        const dialogField = await $('//android.widget.FrameLayout[@resource-id="android:id/custom"]/android.widget.LinearLayout');
        await dialogField.waitForDisplayed();
        const userNameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        await userNameField.waitForDisplayed();
        await userNameField.waitForEnabled();
        //userNameField.clearValue();
        userNameField.addValue('Test User');
        const passwordField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
        await passwordField.waitForDisplayed();
        await passwordField.waitForEnabled();
        //passwordField.clearValue();
        passwordField.addValue('Test Pass');
    })})*/



/*it.only('Verify', () => {
    dialogPage.viewBtn.click()
    driver.touchAction([
        { action: 'press', x: 81, y: 1380 },
        { action: 'moveTo', x: 81, y: 484 },
        'release'

    ])})*/