# 9. Testing Strategy

The testing strategy will follow the "Testing Pyramid" model to ensure confidence and maintainability.

*   **Unit Tests (Vitest):**
    *   These will form the base of the pyramid and cover individual functions and modules in isolation.
    *   **Targets:** Query engine logic, schema discovery algorithm, utility functions.

*   **Integration Tests (Vitest + DOM simulation):**
    *   These will test the interaction between modules. For example, verifying that when the `QueryBuilder` updates a filter, the `ResultsView` receives the filtered data from the `StateService` and renders it correctly.

*   **End-to-End Tests (Playwright):**
    *   These tests will simulate full user journeys in a real browser.
    *   **Example Flow:**
        1.  Launch the application.
        2.  Programmatically upload a test `.jsonl` file.
        3.  Verify that file names and schema appear.
        4.  Build a query using the UI controls.
        5.  Assert that the results view updates and contains the correct, filtered entries.

This tiered approach provides a robust safety net, catching bugs at the lowest possible level while validating the complete user experience.
