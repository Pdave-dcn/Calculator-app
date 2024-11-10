import {
  loadTheme,
  displayOperation,
  getSavedTheme,
} from "./functions/functions.js";

window.addEventListener("DOMContentLoaded", getSavedTheme());

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
