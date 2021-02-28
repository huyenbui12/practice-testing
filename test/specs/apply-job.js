/* eslint-disable no-undef */
const homePage = require('../pageobjects/home-page');
const coreHelper = require('../utils/coreHelper');
const searchPage = require('../pageobjects/search-page');
const jdPage = require('../pageobjects/job-description-page');
const applyPage = require('../pageobjects/apply-page');

describe('Job Application', () => {
  // Declare data to test
  const credentials = coreHelper.readFile('../data/applyData.json');
  const endpoint = coreHelper.readFile('../data/endpointData.json');

  it('should search the job successfully', () => {
    // 1. Navigate to the website
    browser.url(endpoint.BaseURL);
    browser.maximizeWindow();
    // 2. Input keyword to search the job
    homePage.SEARCH_FORM.click();
    coreHelper.inputText(homePage.SEARCH_FORM, credentials.searchkey);
    // 3. Check point
    expect(searchPage.JOB_LINK).toBeExisting();
  });

  it('should apply CV successfully', () => {
    // 1. Click on the job link
    searchPage.JOB_LINK.click();
    jdPage.APPLY_BUTTON.waitForExist(2000);
    // 2. Click on Apply Now button
    jdPage.APPLY_BUTTON.click();
    // 3. Focus on new opened tab
    browser.switchToWindow(browser.getWindowHandles()[1]);
    applyPage.SEND_CV_BUTTON.waitForExist(2000);
    // 4. Input name into Full Name textbox
    applyPage.FULL_NAME_TEXTBOX.click();
    coreHelper.inputText(applyPage.FULL_NAME_TEXTBOX, credentials.fullname);
    // 5. Input email into Email textbox
    coreHelper.inputText(applyPage.EMAIL_TEXTBOX, credentials.email);
    // 6. Input filepath of the CV
    applyPage.CV_INPUT.setValue(browser.uploadFile(credentials.cvpath));
    browser.pause(3000);
    // 7.Check point
    expect(applyPage.FULL_NAME_VALID_CHECK).toBeExisting();
    expect(applyPage.EMAIL_VALID_CHECK).toBeExisting();
    expect(applyPage.CV_VALID_CHECK).toBeExisting();
  });
});
