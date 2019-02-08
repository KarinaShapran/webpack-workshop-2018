/**
 *
 * @param {string} buttonName
 * @returns {string}
 */
const makeButton = buttonName => {
  const buttonLabel = `Button ${buttonName}`;

  const button = document.createElement("button");
  button.innerText = buttonLabel;

  return button;
};

module.exports = makeButton;
