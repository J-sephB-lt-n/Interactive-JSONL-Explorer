# 2. Requirements

## 2.1 Functional Requirements

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

## 2.2 Non-Functional Requirements

*   **NFR1:** The application must have minimal external dependencies to adhere to the single-file architecture.
*   **NFR2:** The user interface must be slick, modern, and intuitive, adhering to a dark theme.
*   **NFR3:** All data processing must occur client-side within the browser. No user data should be transmitted to any external server.
*   **NFR4:** The application must handle files with varied and inconsistent schemas gracefully, without errors.
*   **NFR5:** The application must remain responsive and performant when processing large JSONL files (e.g., up to 100MB).
