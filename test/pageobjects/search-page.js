/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class SearchPage {
  get JOB_LINK() { return $('//h2[@class="title"]'); }
}

module.exports = new SearchPage();
