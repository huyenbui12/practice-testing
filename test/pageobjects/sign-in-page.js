/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

class SignInPage {
  get EMAIL_TEXTBOX() { return $('#user_email'); }

  get PASSWORD_TEXTBOX() { return $('#user_password'); }

  get SIGN_IN_BUTTON() { return $('//input[@value="Sign in"]'); }

  get CAPTCHA_CHECKBOX() { return $('//div[@class="recaptcha-checkbox-border"]'); }

  get CAPTCHA_IFRAME() { return $('//div[@class="g-recaptcha "]//iframe[@role="presentation"]'); }

  signIn(email, password) {
    this.EMAIL_TEXTBOX.setValue(email);
    this.PASSWORD_TEXTBOX.setValue(password);
    browser.switchToFrame(this.CAPTCHA_IFRAME);
    this.CAPTCHA_CHECKBOX.click();
    this.SIGN_IN_BUTTON.click();
  }

  open() {
    browser.maximizeWindow();
    // eslint-disable-next-line global-require
    const endpoint = require('../data/urlData.json');
    browser.url(endpoint.SignInURL);
  }
}
module.exports = new SignInPage();
