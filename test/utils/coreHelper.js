exports.inputText = function inputText(inputElement, inputText) {
  for (let i = 0; i < inputText.length; i++) {
    inputElement.keys(inputText[i]);
  }
  browser.keys('\uE007');
};
