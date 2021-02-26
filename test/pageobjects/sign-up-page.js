class SignUpPage {
  get USERNAME_TEXTBOX() { return $('#user_name') }
  get EMAIL_TEXTBOX() { return $('#user_email')}
  get PASSWORD_TEXTBOX() { return $('#user_password')}
  get SIGN_UP_BUTTON() { return $('//input[@value="Sign up"]')}


  signUp(username, password) {
    this.USERNAME_TEXTBOX.setValue(username);
    this.PASSWORD_TEXTBOX.setValue(password);
    // this.SIGN_UP_BUTTON.click();
    // this.MAIN_PAGE_LOGO.waitForExist(20000);
  }

  open() {
    browser.maximizeWindow();
    const endpoint = require('../data/urlData.json');
    browser.url(endpoint.SignUpURL);
  }
}
module.exports = new SignUpPage();