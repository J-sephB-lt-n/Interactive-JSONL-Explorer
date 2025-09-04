# 12. Coding Standards

To ensure code consistency, readability, and maintainability, the project will adhere to the following standards.

*   **Code Formatting:** All JavaScript and CSS code will be automatically formatted using **Prettier** upon saving. The specific rules are defined in the project's `.prettierrc` configuration file. This enforces a single, consistent style guide.

*   **Code Quality:** **ESLint** will be used to statically analyze the code and identify potential problems. The ruleset, defined in `.eslintrc.js`, will be based on the recommended standards for modern JavaScript.

*   **Naming Conventions:**
    *   **JavaScript Modules/Files:** `camelCase.js` (e.g., `queryEngine.js`).
    *   **JavaScript Classes/Components:** `PascalCase.js` (e.g., `ResultsView.js`).
    *   **CSS Classes:** `kebab-case` (e.g., `.query-builder`).
    *   **Variables & Functions:** `camelCase` (e.g., `const logEntries = ...`).

*   **Documentation:** All but the most trivial functions should be documented using **JSDoc** comments to describe their purpose, parameters, and return values.
