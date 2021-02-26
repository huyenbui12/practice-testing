class ApplyPage {
  get CV_INPUT() { return $('#job_application_cv_local')}
  get SEND_CV_BUTTON() { return $('//button[@type="submit"]')}

}
module.exports = new ApplyPage();