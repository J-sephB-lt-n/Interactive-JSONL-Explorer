# 2. High-Level Architecture

## 2.1. Technical Summary

The Interactive JSONL Explorer is a client-side monolith, packaged as a single, self-contained HTML file. It is built with vanilla JavaScript (ES6+), HTML5, and CSS3, with no external runtime frameworks or libraries. The architecture prioritizes performance, using Web Workers for non-blocking file parsing and a virtualized DOM for rendering large result sets efficiently. All data processing, filtering, and rendering occur exclusively in the user's browser, ensuring data privacy and eliminating the need for a backend server. A lightweight build tool, Vite, will be used during development to bundle all assets into the final distributable HTML file.

## 2.2. Platform and Infrastructure Choice

The application is designed for pure client-side execution and requires no traditional backend infrastructure.

*   **Platform:** Static Web Hosting
*   **Key Services:** None required. The application can be served from any static host.
*   **Deployment Host and Regions:** Any static hosting provider such as GitHub Pages, Vercel, Netlify, or even opened directly from the local filesystem (`file:///`).

## 2.3. Repository Structure

As specified in the PRD, the project will use a monorepo structure. While it's a single application, this approach keeps the codebase organized and accommodates the build process and future testing suites cleanly.

*   **Structure:** Monorepo
*   **Monorepo Tool:** npm workspaces will be sufficient for managing development dependencies.
*   **Package Organization:** A `src` directory will contain all the application source code, logically separated into modules (components, services, utils). A `dist` directory will hold the final bundled `index.html`.

## 2.4. High-Level Architecture Diagram
```mermaid
graph TD
    subgraph Browser
        A[User] -->|Uploads JSONL file(s)| B(UI);
        B --> C{File Handler};
        C -->|Sends file to worker| D[Parser Web Worker];
        D -->|Streams parsed objects| E[In-Memory Data Store];
        B -->|Builds query| F{Query Engine};
        F -->|Filters data from| E;
        E -->|Provides filtered results| G[Results View];
        G -->|Displays formatted JSON| B;
    end

    subgraph Build Process
        H[src/*.js] --> J{Vite};
        I[src/*.css] --> J;
        K[index.html template] --> J;
        J --> L[dist/index.html];
    end

    style B fill:#2b4052,stroke:#fff,stroke-width:2px;
    style G fill:#2b4052,stroke:#fff,stroke-width:2px;
    style D fill:#4a6e8b,stroke:#fff,stroke-width:2px;
    style E fill:#c26a3a,stroke:#fff,stroke-width:2px;
```

## 2.5. Architectural Patterns

*   **Component-Based UI (Vanilla):** The UI will be constructed from independent, reusable components (e.g., `QueryBuilder`, `ResultsList`), each managing its own state and DOM representation. This will be implemented in vanilla JavaScript without a framework.
*   **Observer (Pub/Sub):** A simple, global event emitter will be used for state management. Components can subscribe to events (e.g., `data:loaded`, `filter:updated`) and react to state changes without being tightly coupled.
*   **Web Workers for Off-Thread Parsing:** To prevent the UI from freezing while processing large files, file parsing will be delegated to a separate Web Worker thread. This is the cornerstone of the application's performance strategy.
*   **Virtual DOM / DOM Diffing (Manual):** To render large lists of results performantly, a virtual scrolling technique will be used. Only the visible items in the results list will be rendered to the DOM, dramatically reducing the number of nodes and improving responsiveness.
