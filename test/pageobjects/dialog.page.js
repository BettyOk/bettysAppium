class dialog {

    /*get everyMondayBtn() { return $('//android.widget.CheckedTextView[@index="0"]') };
    get days() { return $$('//android.widget.CheckedTextView[@class="android.widget.CheckedTextView"]') };
    get viewBtn() {return $(`//android.widget.TextView[@content-desc="Views"]`)}*/

    get appBtn() { return $('~App') };
    get alertDialogBtn() {return $('//android.widget.TextView[@content-desc="Alert Dialogs"]')}
    get textEntryDialogBtn() {return $('//android.widget.Button[@content-desc="Text Entry dialog"]')}
    get userNameField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]') }
    get passwordField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]') }
    get dialogOkBtn() {return $('//android.widget.Button[@resource-id="android:id/button1"]')}
    get dialogCancelBtn() {return $('//android.widget.Button[@resource-id="android:id/button2"]')}

}

module.exports = new dialog();