const homePage = require('../pageobjects/home-page');
const HomePage = require('../pageobjects/home-page');

class SignInPage extends HomePage {
  get EMAIL_TEXTBOX() { return $('#user_email')}
  get PASSWORD_TEXTBOX() { return $('#user_password')}
  get SIGN_IN_BUTTON() { return $('//input[@value="Sign in"]')}
  // get SEARCH_FORM() { return $('#search_form')}

  signUp(email, password) {
    this.EMAIL_TEXTBOX.setValue(email);
    this.PASSWORD_TEXTBOX.setValue(password);
    this.SIGN_IN_BUTTON.click();
    homePage.SEARCH_FORM.waitForExist(20000);
  }

  open() {
    browser.maximizeWindow();
    const endpoint = require('../data/urlData.json');
    browser.url(endpoint.SignInURL);
  }
}
module.exports = new SignInPage();