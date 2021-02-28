/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class JDPage {
  get APPLY_BUTTON() { return $('//a[contains(.,"Apply Now")]'); }
}

module.exports = new JDPage();
