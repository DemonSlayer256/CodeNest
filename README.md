# CodeNest – In-Browser Code Editor

Welcome to **CodeNest**, a modern, responsive, and highly interactive in-browser code editor built to streamline the workflow for web developers and enthusiasts. CodeNest allows users to write HTML, CSS, and JavaScript in an intuitive interface with live previews, multiple view modes, and advanced editor customization options. It is ideal for prototyping, learning, or sharing code snippets online without the need for any local development environment setup.

---

## Table of Contents

1. Features
2. Getting Started
3. Installation
4. Usage
5. Editor Interface
6. Multimode and Single View
7. Preview
8. Settings Modal
9. Dark Mode
10. Sharing and Reset
11. Code Loading from URL
12. Dependencies
13. Supported Browsers
14. Customization
15. Contributing
16. License
17. Future Improvements
18. Credits

---

## Features

CodeNest offers a rich set of features designed to make coding easier and more enjoyable:

- Live Preview: Instantly see the results of your HTML, CSS, and JavaScript code in a live iframe preview panel.
- Multimode Editor: Toggle between multi-panel view or single-panel view for focused editing.
- Responsive Design: Fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.
- Ace Editor Integration: Powerful, flexible code editor with syntax highlighting, tab sizing, font size adjustments, and theme support.
- Customizable Settings: Easily configure editor tab size, font size, word wrap, and themes via a settings modal.
- Dark/Light Mode Toggle: Switch between dark and light themes for comfortable coding at any time.
- Shareable URLs: Encode your code snippets in URLs and share them instantly with others.
- Reset Functionality: Quickly reset editors to initial code with a single click.
- Bootstrap 5 Integration: Utilizes Bootstrap for responsive layouts, modals, buttons, and more.
- Font Awesome Icons: A rich icon set is used for editor sections, buttons, and UI elements for better visual clarity.
- Auto Preview Update: Automatic live preview updates after a short pause when code is modified.
- Clean, Modern UI: Minimalistic and intuitive user interface with gradient header, clean panels, and accessible controls.

---

## Getting Started

### Prerequisites

To run CodeNest, all you need is:

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet access for CDN-based libraries (Bootstrap, Ace Editor, Font Awesome)
- Optional: Local web server if you want to run the project as a web application.

---

## Installation

CodeNest requires no complex installation. Follow these steps to get started:

1. Clone or download the repository.
   Example: git clone https://github.com/DemonSlayer256/CodeNest.git
2. Open the index.html file in your preferred web browser.
3. Alternatively, host the project on a local server using Live Server or similar extensions for real-time updates.

---

## Usage

1. Open CodeNest in your browser.
2. You will see three code panels: HTML, CSS, and JavaScript.
3. Write your code in the respective panels.
4. Click Run to render the live preview in the preview section.
5. Modify settings or toggle dark mode for better visual comfort.
6. Use Share to copy a link containing your code for instant sharing.
7. Reset your code with the Reset button when needed.
8. Open the preview in a separate tab for full-screen testing with Open Preview.

---

## Editor Interface

The CodeNest editor interface is divided into multiple sections:

- Navbar: Contains brand logo, toggle buttons for multimode, run/reset/share buttons, dark mode toggle, and settings.
- Editors:
  - HTML Editor
  - CSS Editor
  - JavaScript Editor
- Preview Panel: Displays live rendering of the code.
- Settings Modal: Configure editor preferences such as tab size, font size, theme, and word wrap.
- Responsive Layout: Editors stack vertically on small screens and display side by side on large screens.

---

## Multimode and Single View

CodeNest allows users to toggle between:

- Multimode (Default): Displays all three editors side by side (HTML, CSS, JS) for simultaneous editing.
- Single View: Focus on one editor at a time with toggle buttons to switch between panels. Ideal for mobile devices or minimalistic focus.

Toggle the mode using the Multimode switch in the navbar.

---

## Preview

- Live preview updates in real-time or when the Run button is clicked.
- Displays HTML, CSS, and JavaScript output.
- Supports opening in a new browser tab with Open Preview for testing full-screen behavior.

---

## Settings Modal

The Settings Modal allows full customization of the editor environment:

- Tab Size: Set the number of spaces for indentation (1–8).
- Font Size: Adjust the editor font size (8px–24px).
- Editor Theme: Choose between multiple light and dark themes:
  - Dark: Dracula, Cobalt
  - Light: TextMate, Chrome
- Word Wrap: Enable or disable word wrapping for long lines.

Settings are applied instantly to all editor panels.

---

## Dark Mode

- Toggle between dark and light mode using the moon/sun icon in the navbar.
- Dark mode changes the editor and UI theme to reduce eye strain in low-light environments.
- Themes switch automatically depending on dark mode status.

---

## Sharing and Reset

- Shareable URL: CodeNest encodes your code into a Base64 string in the URL, enabling instant sharing without external services.
- Reset Button: Reverts editors to the initial default code to start fresh.

---

## Code Loading from URL

- If a URL contains a `code` parameter, CodeNest will automatically decode and load the HTML, CSS, and JavaScript into their respective editors.
- This feature allows collaborative sharing and easy testing of pre-written code snippets.

---

## Dependencies

CodeNest relies on the following libraries and CDNs:

- Bootstrap 5 – Layout, buttons, modals
- Ace Editor – Code editor with syntax highlighting
- Font Awesome – Icons for UI enhancement

---

## Supported Browsers

CodeNest is tested and supported in modern browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Customization

Developers can extend CodeNest by:

- Adding new themes for Ace Editor.
- Implementing additional programming language support.
- Integrating code linting or formatting tools.
- Adding project management features like saving projects locally.
- Enhancing the preview panel with console logs and error output.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name
3. Make changes and commit: git commit -m "Add feature"
4. Push to the branch: git push origin feature-name
5. Create a Pull Request with a detailed description.

---

## License

This project is licensed under the MIT License. See LICENSE for more details.

---

## Future Improvements

- Add support for multiple file projects.
- Implement a console panel for JavaScript logging and debugging.
- Allow saving and loading projects to local storage.
- Enable collaborative real-time editing.
- Integrate popular JS/CSS frameworks for quick prototyping.

---

## Credits

- Developed using Ace Editor, Bootstrap 5, and Font Awesome.
- Icons and styles inspired by modern code editors and IDEs.
- Designed to be lightweight, fast, and user-friendly for developers of all levels.

---

**CodeNest** is your all-in-one in-browser IDE for HTML, CSS, and JavaScript. Write, preview, and share your code instantly in a clean and responsive environment. Perfect for learners, hobbyists, and professional developers looking for a portable coding workspace.