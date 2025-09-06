# Story 1.2: Basic UI Shell & Layout

- **As a** user,
- **I want** to see the main application layout,
- **so that** I understand the different functional areas of the tool.

## Acceptance Criteria

- [x] 1. The application renders the three-pane layout: a left sidebar for "Files & Schema," a top area for the "Query Builder," and a main content area for "Results."
- [x] 2. The UI adheres to the "Operator Dark" theme (dark background, light text).
- [x] 3. Placeholders are present in each of the three panes indicating their purpose.
- [x] 4. The layout is responsive and correctly fills the viewport on standard desktop screen sizes.

---

### Dev Agent Record

**Completion Notes:**

- Implemented the basic HTML structure for the three-pane layout in `index.html`.
- Styled the application with the "Operator Dark" theme and responsive flexbox layout in `src/styles/main.css`.
- Cleaned `src/main.js` to only import the necessary CSS.

**File List:**

- `ADDED` index.html
- `MODIFIED` src/main.js
- `MODIFIED` src/styles/main.css

**Status:** Ready for Review
