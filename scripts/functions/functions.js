export function loadTheme(themeNumber) {
  const link = document.getElementById("theme-stylesheet");

  link.href = `styles/style-${themeNumber}.css`;
}
