export function loadTheme(themeNumber) {
  const link = document.getElementById("theme-stylesheet");

  link.href = `styles/style-${themeNumber}.css`;

  localStorage.setItem("selectedTheme", themeNumber);
}

export function getSavedTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");

  if (savedTheme) {
    loadTheme(savedTheme);

    const selectedRadioButton = document.getElementById(`theme-${savedTheme}`);

    if (selectedRadioButton) {
      selectedRadioButton.checked = true;
    }
  }
}

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let resultDisplayed = false;

export function displayOperation(elementToDisplay) {
  const display = document.querySelector(".js-display");
  const elementValue = elementToDisplay.innerText;
  const operators = ["+", "-", "/", "x", "=", ".", "RESET", "DEL"];

  if (operators.includes(elementValue)) {
    if (elementValue === "=" && firstNumber !== null && currentOperator) {
      if (display.value === "") return;

      secondNumber = parseFloat(display.value);
      display.value = calculateResult(
        firstNumber,
        secondNumber,
        currentOperator
      );

      firstNumber = null;
      secondNumber = null;
      currentOperator = null;
      resultDisplayed = true;
    } else if (
      elementValue !== "=" &&
      elementValue !== "RESET" &&
      elementValue !== "DEL" &&
      elementValue !== "."
    ) {
      if (display.value === "") return;

      if (firstNumber !== null && currentOperator) {
        secondNumber = parseFloat(display.value);
        display.value = calculateResult(
          firstNumber,
          secondNumber,
          currentOperator
        );
        firstNumber = parseFloat(display.value);
        resultDisplayed = true;
      } else {
        firstNumber = parseFloat(display.value);
      }

      currentOperator = elementValue;

      setTimeout(() => {
        display.value = "";
      }, 500);
    } else if (elementValue === "RESET") {
      display.value = "";
      firstNumber = null;
      secondNumber = null;
      currentOperator = null;
      resultDisplayed = false;
    } else if (elementValue === ".") {
      if (!display.value.includes(".")) {
        display.value = display.value === "" ? "0." : display.value + ".";
      }
    } else if (elementValue === "DEL") {
      display.value = display.value.slice(0, -1);
    }
  } else {
    if (resultDisplayed) {
      display.value = "";
      resultDisplayed = false;
    }
    display.value += elementValue;
  }
}

export function calculateResult(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error";
    default:
      return num2;
  }
}
