# Calculator Application

A JavaScript-based calculator with theme selection and progressive display of operations, designed as a frontend project. This calculator features support four basic arithmetic operations, displays the current operation dynamically, and allows users to switch between themes. The selected theme is saved in `localStorage` to persist across page reloads.

## Screenshots

### Theme 1

![Calculator Theme 1](screenshots/Theme-1.png "Calculator Theme 1")

### Theme 2

![Calculator Theme 2](screenshots/Theme-2.png "Calculator Theme 2")

### Theme 3

![Calculator Theme 3](screenshots/Theme-3.png "Calculator Theme 3")

## Features

- **Basic Calculator Operations:** Supports addition, subtraction, multiplication, and division.
- **Theme Selection:** Users can choose between three different themes.
- **Persistent Theme:** The selected theme is saved in `localStorage` and automatically applied on page load.
- **Operation Display:** Shows the current operation as it progresses.

### Files Explained

- **`index.html`**: The main HTML structure of the calculator.
- **`main.js`**: Initializes the theme based on the last user selection and handles event listeners for theme and button clicks.
- **`functions.js`**: Contains helper functions for loading themes, calculating operations, and managing the display.
- **`style-1.css`, `style-2.css`, `style-3.css`**: Different CSS files for each theme option.

## Functionality Overview

### Theme Persistence with `localStorage`

The theme selection is saved to `localStorage` using the `loadTheme` function in `functions.js`. When the page loads, `getSavedTheme` checks `localStorage` for the user's last chosen theme and applies it if available.

### Calculator Operations

The `displayOperation` function in `functions.js` dynamically updates the calculator screen with the entered numbers and operators. It also calculates the result on pressing the `=` button, showing it on the screen. Operations continue to build as users add new operators and numbers, providing a smooth and progressive calculation experience.

## Usage

1. **Clone the Repository**: Clone or download this repository to your local machine.
2. **Open `index.html`**: Simply open the `index.html` file in a web browser to start using the calculator.
3. **Select Theme**: Choose your preferred theme using the radio buttons. The selection will be saved for future sessions.

## Example Usage

1. Enter numbers and operations using the calculator buttons.
2. Select a theme from the available options (1, 2, or 3).
3. Observe that the theme is saved across page reloads, and the selected radio button remains checked.
