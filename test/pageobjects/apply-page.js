/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class ApplyPage {
  get FULL_NAME_TEXTBOX() { return $('#job_application_fullname'); }

  get EMAIL_TEXTBOX() { return $('#job_application_email'); }

  get CV_INPUT() { return $('#job_application_cv_local'); }

  get SEND_CV_BUTTON() { return $('//button[@type="submit"]'); }

  get FULL_NAME_VALID_CHECK() { return $('//label[@id="job_application_fullname-error"][contains(.,"Looks good")]'); }

  get EMAIL_VALID_CHECK() { return $('//label[@id="job_application_email-error"][contains(.,"Looks good")]'); }

  get CV_VALID_CHECK() { return $('//label[@id="job_application_cv_local-error"][contains(.,"Looks good")]'); }
}
module.exports = new ApplyPage();
