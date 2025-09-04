# 6. Epic Details

## Epic 1: Foundation & Core File Handling

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

## Epic 2: Schema Discovery & Query Builder UI

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

## Epic 3: Data Filtering & Results Display

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
