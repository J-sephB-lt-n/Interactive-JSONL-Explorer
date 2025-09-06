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
- Added a Vitest smoke test in `src/main.test.js` to verify the rendering of the main UI panels, addressing QA feedback. This required adding `jsdom` and updating `vite.config.js`.

**File List:**

- `ADDED` index.html
- `MODIFIED` src/main.js
- `MODIFIED` src/styles/main.css
- `ADDED` src/main.test.js
- `MODIFIED` vite.config.js

**Status:** Ready for Review

## QA Results

### Review Date: 2024-08-01

### Reviewed By: Quinn (Test Architect)

### Code Quality Assessment

The implementation of the basic UI shell is clean and adheres to the project's coding standards and file structure. The HTML is semantic, and the CSS is well-organized for this stage of the project. A minor refactoring was performed to introduce CSS variables for layout proportions, improving maintainability.

### Refactoring Performed

- **File**: `src/styles/main.css`
  - **Change**: Replaced hard-coded percentage values for pane sizes with CSS variables (`--sidebar-width`, `--query-builder-height`).
  - **Why**: To improve maintainability and make future layout adjustments easier and less error-prone.
  - **How**: Centralized layout values in the `:root` selector.

### Compliance Check

- Coding Standards: ✓
- Project Structure: ✓
- Testing Strategy: ✗ - No tests were included for the UI layout. The testing strategy requires unit tests as a baseline.
- All ACs Met: ✓

### Improvements Checklist

- [x] Refactored `main.css` to use variables for layout sizes.
- [x] Add a basic smoke test to verify that the main UI panels (`.sidebar`, `.query-builder`, `.results`) are rendered.

### Security Review

Not applicable for this story.

### Performance Considerations

Not applicable for this story.

### Files Modified During Review

- `src/styles/main.css`

### Gate Status

Gate: PASS → `docs/qa/gates/1.2-basic-ui-shell-layout.yml`

### Recommended Status

✓ Ready
(Story owner decides final status)
