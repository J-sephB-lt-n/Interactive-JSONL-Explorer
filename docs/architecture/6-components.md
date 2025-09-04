# 6. Components

The application will be broken down into several logical, DOM-manipulating components.

*   **`App`**
    *   **Responsibility:** The main container component that initializes all other components and orchestrates the overall application flow.
    *   **Dependencies:** `FileUpload`, `SchemaExplorer`, `QueryBuilder`, `ResultsView`, `StateService`

*   **`FileUpload`**
    *   **Responsibility:** Handles the user interface and logic for file selection, including the file picker and drag-and-drop functionality. Publishes an event with the loaded files.
    *   **Dependencies:** `StateService`

*   **`SchemaExplorer`**
    *   **Responsibility:** Receives the parsed data, discovers all unique (including nested) keys, and renders them in a hierarchical, collapsible tree view.
    *   **Dependencies:** `StateService`

*   **`QueryBuilder`**
    *   **Responsibility:** Provides the UI for creating filter rules and groups (AND/OR). It uses the discovered schema for key selection and publishes the constructed query object.
    *   **Dependencies:** `StateService`

*   **`ResultsView`**
    *   **Responsibility:** The most complex component. It listens for new query results, renders them using a virtual scrolling mechanism, and provides aesthetically pleasing JSON formatting with collapsible sections.
    *   **Dependencies:** `StateService`

*   **`FileParserService` (Web Worker)**
    *   **Responsibility:** Runs in a separate thread. Responsible for receiving file handles, reading them line-by-line, parsing JSON, and streaming `LogEntry` objects back to the main thread.
    *   **Dependencies:** None

*   **`StateService` (Pub/Sub Module)**
    *   **Responsibility:** A simple event bus for managing application state. It holds the master list of log entries, the discovered schema, and the current filter query. Components subscribe to it for updates.
    *   **Dependencies:** None
