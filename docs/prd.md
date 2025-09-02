# Interactive JSONL Explorer Product Requirements Document (PRD)

### 1. Goals and Background Context

#### 1.1 Goals

*   Deliver a slick, aesthetic, and intuitive user interface.
*   Package the entire application as a single HTML file with minimal dependencies.
*   Support uploading multiple JSONL files via drag-and-drop or a file picker.
*   Provide a clear and easy way for users to discover all available keys from the uploaded files.
*   Enable powerful filtering of JSON entries using flexible AND/OR combinations across any field.
*   Display filtered JSON entries in a clean, well-formatted, and easily readable view.

#### 1.2 Background Context

The "Interactive JSONL Explorer" is designed to address the challenges developers and product managers face when analyzing structured logs and traces stored in JSONL format. Often, exploring these files requires custom scripts or cumbersome command-line tools, which hinders rapid exploration and debugging. This project aims to provide a streamlined, user-friendly, and aesthetically pleasing in-browser tool that simplifies this process.

By allowing users to upload multiple JSONL files and offering a powerful, intuitive interface for filtering and viewing the data, the explorer will significantly speed up the process of debugging application logs and gaining insights from application behavior. The primary users are developers needing to quickly diagnose issues and product managers seeking to understand application usage patterns through log data.

#### 1.3 Change Log

| Date       | Version | Description   | Author     |
| :--------- | :------ | :------------ | :--------- |
| 2024-07-29 | 0.1     | Initial draft | John (PM)  |

### 2. Requirements

#### 2.1 Functional Requirements

*   **FR1:** The application must be delivered as a single, self-contained HTML file.
*   **FR2:** Users must be able to upload one or more JSONL files simultaneously.
*   **FR3:** File uploads must be supported through a standard file picker dialog.
*   **FR4:** File uploads must be supported via a drag-and-drop interface element.
*   **FR5:** The application must parse all uploaded JSONL files and identify the complete set of unique keys present across all JSON entries, recursively discovering keys within nested JSON objects.
*   **FR6:** The UI must display the list of all discovered keys to the user, providing a schema overview. Nested keys should be displayed in a hierarchical or flattened (e.g., `user.address.city`) manner for clarity.
*   **FR7:** Users must be able to construct queries to filter the JSON entries from all uploaded files.
*   **FR8:** The query builder must allow combining multiple filter conditions using both `AND` and `OR` logic.
*   **FR9:** The query builder must support filtering on any discovered key, including nested keys.
*   **FR10:** The query builder should support operators such as `equals`, `not equals`, `contains`, `does not contain`, `starts with`, `ends with`, `exists`, and `does not exist`.
*   **FR11:** The application must display a list of JSON entries that match the user-defined filter query.
*   **FR12:** The displayed JSON entries must be aesthetically formatted for readability, including collapsible indentation for nested objects/arrays and syntax highlighting.

#### 2.2 Non-Functional Requirements

*   **NFR1:** The application must have minimal external dependencies to adhere to the single-file architecture.
*   **NFR2:** The user interface must be slick, modern, and intuitive, adhering to a dark theme.
*   **NFR3:** All data processing must occur client-side within the browser. No user data should be transmitted to any external server.
*   **NFR4:** The application must handle files with varied and inconsistent schemas gracefully, without errors.
*   **NFR5:** The application must remain responsive and performant when processing large JSONL files (e.g., up to 100MB).

### 3. User Interface Design Goals

#### 3.1 Overall UX Vision

The application's user experience should be minimalist, intuitive, and highly functional, reflecting a professional tool for developers. The vision is to create an interface that is "discoverable," where new users can quickly understand its capabilities without a manual. The dark theme will be sophisticated, using typography and spacing to ensure clarity and reduce eye strain during long sessions. The overall feel should be fast, responsive, and efficient.

#### 3.2 Key Interaction Paradigms

*   **Layout:** A three-pane layout will form the core of the interface: a left sidebar for file management and schema discovery, a central top area for the query builder, and a main content area below for displaying results.
*   **File Upload:** A prominent drag-and-drop zone and a clear "Upload Files" button will be present in the initial state and accessible later.
*   **Query Building:** An interactive, dynamic query builder will allow users to add/remove filter conditions. Each condition will consist of a key selector (dropdown of discovered keys), an operator selector (e.g., `equals`, `contains`), and a value input field.
*   **Results Display:** Results will be displayed in a paginated or virtualized list to handle large numbers of entries. Each JSON object will be presented in a collapsible, syntax-highlighted tree view.

#### 3.3 Core Screens and Views

As a single-page application, the experience is defined by states rather than screens:
*   **Empty State:** The initial view of the application, featuring a clear call-to-action to upload JSONL files.
*   **Active State:** The main workspace view, displayed after files are loaded. This state contains the schema explorer, query builder, and results panel.

#### 3.4 Accessibility: WCAG AA

The application will adhere to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. This includes ensuring sufficient color contrast, keyboard navigability for all interactive elements, and appropriate ARIA attributes.

#### 3.5 Branding

Branding will be minimal and professional. The aesthetic will be "Operator Dark"—a clean, dark-themed interface that prioritizes content and functionality. The focus will be on excellent typography, consistent iconography, and a limited, purposeful color palette. No logo or specific brand identity is required at this stage.

#### 3.6 Target Device and Platforms: Web Responsive

The application will be a responsive web application designed primarily for desktop browsers (Chrome, Firefox, Safari, Edge). While it should be functional on mobile browsers, the UI will be optimized for the screen real estate and input methods of a desktop environment.

### 4. Technical Assumptions

#### 4.1 Repository Structure: Monorepo

A single repository (`Monorepo`) is the most logical choice for this project, as it consists of one self-contained application. This simplifies version control, issue tracking, and the build process.

#### 4.2 Service Architecture: Monolith (Client-Side)

The architecture will be a client-side `Monolith`. All application logic, including file parsing, data processing, and rendering, will be executed entirely within the user's browser. This aligns with the "no backend server" and "data privacy" requirements.

#### 4.3 Testing Requirements: Unit + Integration

The testing strategy should include both `Unit tests` for individual functions (e.g., query logic, parsers) and `Integration tests` to verify that components work together correctly (e.g., file upload triggers parsing and updates the UI). This provides a solid balance of speed and confidence.

#### 4.4 Additional Technical Assumptions and Requests

*   **Language & Framework:** The application should be built using vanilla **JavaScript (ES6+), HTML5, and CSS3** without any major frontend frameworks (like React, Vue, or Angular). This approach is the most direct way to achieve the "minimal dependencies" and "single HTML file" requirements.
*   **Build Process:** A lightweight build tool (such as **Vite** or **Parcel**) will be necessary to bundle the JavaScript and CSS and inline them into a single `index.html` file for distribution.
*   **Libraries:** Any third-party libraries should be carefully vetted for size and dependencies. The default assumption is **zero external runtime libraries**, but the Architect may select micro-libraries for specific, complex tasks (e.g., a highly optimized JSON parser or a virtual scrolling library) if the performance benefits justify the added dependency.
*   **Deployment Target:** The final output is a single HTML file that can be hosted on any static web hosting service (e.g., GitHub Pages, Netlify, Vercel) or opened directly from a local filesystem.

### 5. Epic List

*   **Epic 1: Foundation & Core File Handling:** Establish the foundational UI, project structure, build process, and the core functionality for uploading, parsing, and storing JSONL files in the browser.
*   **Epic 2: Schema Discovery & Query Builder UI:** Implement the logic to discover the complete, nested schema from all loaded files and provide the user with a fully interactive UI to construct complex filter queries.
*   **Epic 3: Data Filtering & Results Display:** Implement the client-side filtering engine to execute user-defined queries against the loaded data and display the results in a formatted, paginated, and aesthetically pleasing view.

### 6. Epic Details

#### Epic 1: Foundation & Core File Handling

**Goal:** The goal of this epic is to establish the complete foundational structure of the application. This includes setting up the development environment, the build process to generate the single HTML file, and implementing the core UI layout. It will also deliver the essential functionality of allowing a user to upload JSONL files via both a file picker and drag-and-drop, and have those files parsed and stored in memory, ready for the next epic.

***

**Story 1.1: Project Setup & Build Process**

*   **As a** developer,
*   **I want** a complete project structure with a configured build tool,
*   **so that** I can efficiently develop the application and generate the final, single HTML file artifact.

*Acceptance Criteria:*
1.  A Git repository is initialized with a standard `.gitignore` file.
2.  A `package.json` file is created to manage development dependencies.
3.  A lightweight build tool (e.g., Vite) is configured to handle JS/CSS bundling.
4.  The build process correctly inlines all JavaScript and CSS into a single `index.html` file.
5.  A development server with hot-reloading is available via an `npm` script (e.g., `npm run dev`).
6.  A production build can be generated via an `npm` script (e.g., `npm run build`).

***

**Story 1.2: Basic UI Shell & Layout**

*   **As a** user,
*   **I want** to see the main application layout,
*   **so that** I understand the different functional areas of the tool.

*Acceptance Criteria:*
1.  The application renders the three-pane layout: a left sidebar for "Files & Schema," a top area for the "Query Builder," and a main content area for "Results."
2.  The UI adheres to the "Operator Dark" theme (dark background, light text).
3.  Placeholders are present in each of the three panes indicating their purpose.
4.  The layout is responsive and correctly fills the viewport on standard desktop screen sizes.

***

**Story 1.3: File Upload Functionality**

*   **As a** user,
*   **I want** to upload JSONL files using both a file picker and drag-and-drop,
*   **so that** I can choose the most convenient method for loading my data.

*Acceptance Criteria:*
1.  An "Upload Files" button is visible and clickable, which opens the OS's native file selection dialog.
2.  A designated drop zone is visually indicated in the UI (e.g., when a file is dragged over the window).
3.  Users can select/drop one or more files with a `.jsonl` extension.
4.  After a successful upload from either method, the names of the uploaded files are displayed in the "Files & Schema" sidebar.
5.  The application correctly handles cases where the user cancels the file selection.
6.  The application ignores non-`.jsonl` files and provides clear user feedback if they are dropped.

***

**Story 1.4: File Parsing & Data Storage**

*   **As a** user,
*   **I want** the application to process the uploaded files,
*   **so that** the data is ready for querying.

*Acceptance Criteria:*
1.  Upon file upload, the application reads the content of each `.jsonl` file.
2.  Each line in the file is parsed as a separate JSON object.
3.  Malformed JSON lines are gracefully handled and logged to the developer console without crashing the application.
4.  The parsed JSON objects from all files are stored in a single data structure in memory.
5.  Each stored object is augmented with metadata indicating its source filename.
6.  A loading indicator is displayed while files are being parsed.

#### Epic 2: Schema Discovery & Query Builder UI

**Goal:** The goal of this epic is to analyze all loaded data to discover the complete schema and present it to the user. It will also deliver a fully interactive query builder UI, allowing users to construct complex filtering logic using the discovered schema keys. At the end of this epic, the application will have a complete in-memory representation of the user's desired filter, ready to be executed in Epic 3.

***

**Story 2.1: Schema Discovery Engine**

*   **As a** user,
*   **I want** the application to automatically discover all unique keys from my data,
*   **so that** I can see the complete structure of my logs.

*Acceptance Criteria:*
1.  After data is parsed, a process is triggered to scan all JSON objects.
2.  The process recursively traverses nested objects and arrays to find all possible key paths.
3.  The final output is a de-duplicated, sorted list of all unique key paths (e.g., `user.id`, `user.address.city`).
4.  The discovery process correctly handles varied schemas where keys are not present in all objects.
5.  The list of discovered keys is stored in memory for use by the UI.

***

**Story 2.2: Schema Display**

*   **As a** user,
*   **I want** to see the discovered schema in the UI,
*   **so that** I can easily understand what fields are available for filtering.

*Acceptance Criteria:*
1.  The "Files & Schema" sidebar is updated to display the list of unique keys discovered in Story 2.1.
2.  The schema is presented in a hierarchical, collapsible tree view to represent nesting.
3.  Users can expand and collapse parent keys to show/hide nested keys.
4.  The display is updated automatically if the user uploads new files with different keys.

***

**Story 2.3: Query Builder Interface**

*   **As a** user,
*   **I want** an interface to build filter queries,
*   **so that** I can specify the criteria for the data I want to see.

*Acceptance Criteria:*
1.  The "Query Builder" panel contains controls to add new filter rules and rule groups.
2.  A single filter rule consists of a key selector (dropdown), an operator selector (dropdown), and a value input (text field).
3.  The operator dropdown includes all specified operators (`equals`, `contains`, `exists`, etc.).
4.  The key selector dropdown is populated with the flattened list of keys from the schema discovery (e.g., `user.address.city`).
5.  Users can add multiple rules to the canvas.

***

**Story 2.4: Advanced Query Logic (AND/OR Groups)**

*   **As a** user,
*   **I want** to combine multiple filter rules with AND/OR logic,
*   **so that** I can create complex and precise queries.

*Acceptance Criteria:*
1.  The query builder supports adding "groups" of rules.
2.  Each group can be set to either `AND` (all rules within must match) or `OR` (any rule within can match).
3.  Groups can be nested within other groups to create advanced query logic (e.g., `(A AND B) OR C`).
4.  The UI clearly visualizes the nesting and logic of the rules and groups (e.g., through indentation and borders).
5.  As the user builds the query, a corresponding JSON representation of the query is maintained in the application's state.

#### Epic 3: Data Filtering & Results Display

**Goal:** The goal of this epic is to implement the client-side filtering engine that executes the user's query. It will then display the matching results in a performant, readable, and aesthetically pleasing interface, completing the core user journey.

***

**Story 3.1: Filtering Engine**

*   **As a** developer,
*   **I want** a filtering engine that can execute the user-defined query against the in-memory data,
*   **so that** we can find all matching JSON entries.

*Acceptance Criteria:*
1.  A function is created that takes the array of all parsed JSON objects and the query model from Epic 2 as input.
2.  The engine correctly evaluates nested `AND`/`OR` groups.
3.  The engine correctly applies all filter operators (`equals`, `contains`, `exists`, etc.) on the specified key paths.
4.  The engine correctly handles type differences (e.g., string vs. number comparisons).
5.  The function returns a new array containing only the JSON objects that match the query.
6.  The filtering process is automatically re-triggered whenever the user modifies the query.

***

**Story 3.2: Results Display**

*   **As a** user,
*   **I want** to see the log entries that match my query,
*   **so that** I can analyze the data.

*Acceptance Criteria:*
1.  The "Results" panel is populated with the entries returned from the filtering engine.
2.  A clear count of the total number of matching entries is displayed (e.g., "Showing 42 of 10,000 entries").
3.  Each JSON entry is rendered in a clean, readable format with syntax highlighting.
4.  Nested objects and arrays within a result are collapsible and expandable.
5.  The source filename for each entry is displayed with the result.
6.  If no entries match the query, a "No results found" message is displayed.

***

**Story 3.3: Results View Performance**

*   **As a** user,
*   **I want** the results view to remain fast and responsive, even with thousands of results,
*   **so that** the tool is usable for large datasets.

*Acceptance Criteria:*
1.  The results list is rendered using a performance optimization technique like virtual scrolling or pagination to prevent UI freezes.
2.  If pagination is used, the user can easily navigate between pages of results.
3.  Scrolling through a large number of results is smooth and does not lag.
4.  The application's memory usage remains reasonable even when displaying a subset of a very large result set.

### 7. Checklist Results Report

#### Executive Summary

*   **Overall PRD Completeness:** 95%
*   **MVP Scope Appropriateness:** Just Right
*   **Readiness for Architecture Phase:** Ready
*   **Most Critical Gaps or Concerns:** The PRD is very strong. The only minor gap is the lack of explicit definition for scope boundaries (what is explicitly *out* of scope for the MVP), but this is implied by the tightly focused feature set and can be clarified with the Architect.

#### Category Analysis

| Category | Status | Critical Issues |
| :--- | :--- | :--- |
| 1. Problem Definition & Context | PASS | None |
| 2. MVP Scope Definition | PASS | Minor: Lacks an explicit "Out of Scope" section. |
| 3. User Experience Requirements | PASS | None |
| 4. Functional Requirements | PASS | None |
| 5. Non-Functional Requirements | PASS | None |
| 6. Epic & Story Structure | PASS | None |
| 7. Technical Guidance | PASS | None |
| 8. Cross-Functional Requirements | PARTIAL | Data, Integration, and Operational requirements are not explicitly detailed but are simple and implied by the client-side architecture. This is acceptable for this project's scope. |
| 9. Clarity & Communication | PASS | The document is clear, well-structured, and uses consistent language. |

#### Top Issues by Priority

*   **BLOCKERS:** None.
*   **HIGH:** None.
*   **MEDIUM:** It would improve clarity to add a small section explicitly listing features that are "Out of Scope" for the MVP (e.g., user accounts, saving queries, sharing results).
*   **LOW:** While not strictly necessary for this project, explicitly stating operational requirements like "deployment via static file copy" would add formal completeness.

#### MVP Scope Assessment

The scope defined in the epics and stories is a perfect representation of a Minimum Viable Product. It is focused entirely on the core user journey of uploading, querying, and viewing data. There are no "nice-to-have" features included. The complexity is low, and the timeline for this scope seems realistic.

#### Technical Readiness

The technical constraints are exceptionally clear, particularly the mandate for a vanilla JS, single-file architecture. This provides strong guidance for the Architect. There are no major technical risks identified, as the chosen technologies are well-understood. The primary area for architectural investigation will be selecting the optimal performance strategy for the results view (pagination vs. virtual scrolling).

#### Recommendations & Decision

My recommendation is to add a brief "Out of Scope" section for clarity, but this is not a blocker. The PRD is comprehensive, the stories are well-defined, and the technical constraints are clear.

**Final Decision: READY FOR ARCHITECT**

***

### 8. Next Steps

#### 8.1 UX Expert Prompt

> Hello! I need a high-fidelity design and a component library for the "Interactive JSONL Explorer." Please use the attached PRD as the source of truth for all requirements and UI goals. The design must adhere to the "Operator Dark" theme, use a three-pane layout, and follow WCAG AA accessibility standards. The key user flows to design are the file upload (including drag-and-drop), the dynamic query builder, and the virtualized results view.

#### 8.2 Architect Prompt

> Your task is to create a complete technical architecture and implementation plan for the "Interactive JSONL Explorer" based on the attached PRD. The architecture must strictly adhere to all technical assumptions, especially the requirement for a vanilla JavaScript, single-file HTML output with no runtime frameworks. Please provide a detailed breakdown of the components, data structures, and the proposed build process. Pay special attention to the client-side performance strategy for parsing and rendering large datasets.
