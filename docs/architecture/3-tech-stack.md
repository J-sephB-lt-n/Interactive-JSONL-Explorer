# 3. Tech Stack

This table represents the definitive technology selection for the project. All development must adhere to these choices.

| Category             | Technology         | Version | Purpose                                             | Rationale                                                                        |
| :------------------- | :----------------- | :------ | :-------------------------------------------------- | :------------------------------------------------------------------------------- |
| Frontend Language    | JavaScript (ES6+)  | ES2020+ | Core application logic                              | Meets the "vanilla JS" requirement. Modern features improve code quality.        |
| Markup Language      | HTML5              | 5       | Application structure                               | Standard for modern web applications.                                            |
| Styling              | CSS3               | 3       | UI styling and layout                               | Meets the "vanilla CSS" requirement. Flexbox, Grid, and media queries will be used for a fully responsive layout. |
| Build Tool           | Vite               | Latest  | Development server, bundling, and inlining          | Provides a fast dev experience and a simple configuration for the single-file build. |
| Frontend Testing     | Vitest             | Latest  | Unit and integration testing                        | Native to the Vite ecosystem, fast, and has a Jest-compatible API.                 |
| E2E Testing          | Playwright         | Latest  | End-to-end testing of user flows                    | Provides reliable cross-browser testing for the complete application.            |
| Code Formatting      | Prettier           | Latest  | Consistent code style                               | Enforces a uniform style guide, improving readability.                           |
| Linting              | ESLint             | Latest  | Code quality and error prevention                   | Catches common errors and enforces best practices.                               |
