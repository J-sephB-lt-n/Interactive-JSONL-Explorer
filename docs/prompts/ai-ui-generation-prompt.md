### AI UI Generation Prompt for "Interactive JSONL Explorer"

**1. High-Level Goal:**

Generate a high-fidelity, responsive user interface design for a web-based developer tool called the "Interactive JSONL Explorer." The design must be sophisticated, intuitive, and adhere to a professional, dark-themed aesthetic ("Operator Dark"). The final output should be a complete UI concept covering the key user flows of file upload, query construction, and results visualization, all while complying with WCAG 2.1 Level AA accessibility standards.

**2. Detailed, Step-by-Step Instructions:**

1.  **Overall Layout:**
    *   Create a three-pane layout designed for desktop-first use.
    *   **Left Pane ("Files & Schema"):** This pane should occupy roughly 20% of the viewport width. It will list uploaded files and display a hierarchical, collapsible tree view of the discovered JSON schema.
    *   **Center-Top Pane ("Query Builder"):** This pane sits above the results, spanning the remaining 80% of the viewport width. It is the workspace for building filter queries.
    *   **Main Content Pane ("Results"):** This is the largest area, sitting below the query builder. It will display the filtered JSONL entries.

2.  **Theme & Aesthetics ("Operator Dark"):**
    *   **Background:** Use a dark, near-black background (e.g., `#1a1b26`).
    *   **Text:** Primary text should be a soft white or light gray (e.g., `#c0caf5`).
    *   **Accent Color:** Use a single, vibrant accent color for interactive elements like buttons, links, and highlights (e.g., a bright cyan, magenta, or green).
    *   **Typography:** Use a clean, monospaced font for all code/data display (e.g., Fira Code, JetBrains Mono) and a modern sans-serif font for UI labels (e.g., Inter, Lato).
    *   **Spacing:** Be generous with whitespace and padding to create a clean, uncluttered feel.

3.  **Component Design & Key Flows:**

    *   **Initial (Empty) State:**
        *   Design a welcoming initial view.
        *   The left pane should be empty or contain an invitation to upload files.
        *   The main content area should feature a prominent "Upload Files" button and a visually distinct drag-and-drop zone with clear instructional text (e.g., "Drag & Drop .jsonl files here").

    *   **File Upload Flow & Left Pane:**
        *   Upon file upload, display the list of file names in the left pane. Include a subtle icon to remove a file.
        *   Below the file list, design the schema explorer. It must be a tree view where users can expand/collapse nested keys (e.g., `user` -> `address` -> `city`).
        *   Ensure the schema tree is clearly separated from the file list.

    *   **Dynamic Query Builder (Center-Top Pane):**
        *   This is the most complex interactive component. It needs to support creating rules and nested rule groups.
        *   Design a "rule" component: a horizontal group containing [Key Dropdown] [Operator Dropdown] [Value Input] [Remove Rule Button]. The key dropdown should be populated from the discovered schema.
        *   Design a "group" container that can be toggled between `AND` / `OR`. This container will have a distinct visual style (e.g., a colored border or indented background) and will hold multiple rules or other nested groups.
        *   Include a primary "Add Rule" button and an "Add Group" button to extend the query.
        *   The UI must clearly visualize the nesting and logic (`(A AND B) OR C`).

    *   **Virtualized Results View (Main Content Pane):**
        *   Design the display for a single JSONL entry. It should feature:
            *   Syntax highlighting for keys, strings, numbers, etc.
            *   Collapsible nodes for nested objects and arrays.
            *   Metadata displayed prominently, such as the source filename.
        *   At the top of the results pane, display a summary counter (e.g., "Showing 150 of 3,452 results").
        *   Design pagination or a virtual scrollbar that is clean and unobtrusive, capable of handling thousands of entries without degrading performance.
        *   If no results match the query, display a clear "No results found" message in the center of the pane.

**3. Code Examples, Data Structures & Constraints:**

*   **Technology Stack:** The final implementation will be vanilla JavaScript, HTML, and CSS, bundled into a single file. You can use modern CSS features like Flexbox and Grid. **Do NOT use React, Vue, or any other JS framework.**
*   **Accessibility:**
    *   Ensure all interactive elements (buttons, inputs, dropdowns) are fully navigable and operable via keyboard.
    *   All color combinations must meet WCAG AA contrast ratios.
    *   Use appropriate ARIA roles where necessary, especially for the dynamic query builder and tree view.
*   **What to Avoid:**
    *   Do not include any branding, logos, or user authentication flows.
    *   Avoid overly complex animations or visual effects. The design should prioritize speed and clarity.
    *   Do not use any external image assets; use CSS or SVG for icons.

**4. Define a Strict Scope:**

*   The scope of this design is limited to the single-page "Interactive JSONL Explorer" application as described.
*   Focus only on the three core user flows: file upload, query building, and results viewing.
*   Do not design any settings pages, user profiles, or data export functionality.
