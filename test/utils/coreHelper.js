/* eslint-disable no-undef */
/* eslint-disable global-require */
exports.inputText = function inputText(inputElement, text) {
  for (let i = 0; i < text.length; i += 1) {
    inputElement.keys(text[i]);
  }
  browser.keys('\uE007');
};

exports.readFile = function readFile(inputPath) {
  // eslint-disable-next-line import/no-dynamic-require
  const rf = require(inputPath);
  return rf;
};
