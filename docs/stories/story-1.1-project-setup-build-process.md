# Story 1.1: Project Setup & Build Process

- **As a** developer,
- **I want** a complete project structure with a configured build tool,
- **so that** I can efficiently develop the application and generate the final, single HTML file artifact.

## Acceptance Criteria

1.  A Git repository is initialized with a standard `.gitignore` file.
2.  A `package.json` file is created to manage development dependencies.
3.  A lightweight build tool (e.g., Vite) is configured to handle JS/CSS bundling.
4.  The build process correctly inlines all JavaScript and CSS into a single `index.html` file.
5.  A development server with hot-reloading is available via an `npm` script (e.g., `npm run dev`).
6.  A production build can be generated via an `npm` script (e.g., `npm run build`).
