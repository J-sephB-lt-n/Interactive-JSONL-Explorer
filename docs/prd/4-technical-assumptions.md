# 4. Technical Assumptions

## 4.1 Repository Structure: Monorepo

A single repository (`Monorepo`) is the most logical choice for this project, as it consists of one self-contained application. This simplifies version control, issue tracking, and the build process.

## 4.2 Service Architecture: Monolith (Client-Side)

The architecture will be a client-side `Monolith`. All application logic, including file parsing, data processing, and rendering, will be executed entirely within the user's browser. This aligns with the "no backend server" and "data privacy" requirements.

## 4.3 Testing Requirements: Unit + Integration

The testing strategy should include both `Unit tests` for individual functions (e.g., query logic, parsers) and `Integration tests` to verify that components work together correctly (e.g., file upload triggers parsing and updates the UI). This provides a solid balance of speed and confidence.

## 4.4 Additional Technical Assumptions and Requests

*   **Language & Framework:** The application should be built using vanilla **JavaScript (ES6+), HTML5, and CSS3** without any major frontend frameworks (like React, Vue, or Angular). This approach is the most direct way to achieve the "minimal dependencies" and "single HTML file" requirements.
*   **Build Process:** A lightweight build tool (such as **Vite** or **Parcel**) will be necessary to bundle the JavaScript and CSS and inline them into a single `index.html` file for distribution.
*   **Libraries:** Any third-party libraries should be carefully vetted for size and dependencies. The default assumption is **zero external runtime libraries**, but the Architect may select micro-libraries for specific, complex tasks (e.g., a highly optimized JSON parser or a virtual scrolling library) if the performance benefits justify the added dependency.
*   **Deployment Target:** The final output is a single HTML file that can be hosted on any static web hosting service (e.g., GitHub Pages, Netlify, Vercel) or opened directly from a local filesystem.
