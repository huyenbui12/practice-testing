/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class HomePage {
  get SEARCH_FORM() { return $('#search_form'); }

  get UPLOAD_CV_BUTTON() { return $('//a[@href="/profile"]'); }
}
module.exports = new HomePage();
