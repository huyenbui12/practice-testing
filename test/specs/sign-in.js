const signInPage = require('../pageobjects/sign-in-page');

describe('Sign In', () => {
  it('should navigate to the page successfully', () => {
    signInPage.open();
  });
});
