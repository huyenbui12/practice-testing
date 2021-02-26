const signUpPage = require('../pageobjects/sign-up-page');

describe('Sign Up', () => {
  it('should navigate to the page successfully', () => {
    signUpPage.open();
  });
});
