const homePage = require('../pageobjects/home-page');
const signUpPage = require('../pageobjects/sign-up-page');
const coreHelper = require('../utils/coreHelper');
const searchPage = require('../pageobjects/search-page');
const jdPage = require('../pageobjects/job-description-page');
const applyPage = require('../pageobjects/apply-page'); 

describe('Job Application', () => {
  it('should search the job successfully', () => {
    // // 1. Open the URL
    // signInPage.open();
    // // 2. Sign in
    // signInPage.signIn('thaohuyen','123456');
    // 3. Input keyword to search the job
    browser.url('https://itviec.com/');
    browser.maximizeWindow();
    homePage.SEARCH_FORM.click();
    coreHelper.inputText(homePage.SEARCH_FORM, 'Senior Fullstack .NET Core');
    // 4. Check point
    expect(searchPage.JOB_LINK).toBeExisting();
  });

  it('should apply CV successfully', () => {
    // 1. Click the job link
    searchPage.JOB_LINK.click();
    jdPage.APPLY_BUTTON.waitForExist(2000);
    // 2. Click on Apply Now button
    jdPage.APPLY_BUTTON.click();
    applyPage.SEND_CV_BUTTON.waitForExist(2000);
    // 3. Input filepath of the CV
    driver.findElement(By.id("job_application_cv_local")).sendKeys("G:/test-cv.docx");
    // 4. Click Apply button
    applyPage.SEND_CV_BUTTON.click();
  });
});