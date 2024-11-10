import { loadTheme, displayOperation } from "./functions/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".js-theme-selector input[type='radio']")
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        loadTheme(event.target.value);
      });
    });

  document.addEventListener("click", (event) => {
    if (event.target.closest("button[type='button']")) {
      displayOperation(event.target);
    }
  });
});
