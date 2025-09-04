# Story 2.3: Query Builder Interface

- **As a** user,
- **I want** an interface to build filter queries,
- **so that** I can specify the criteria for the data I want to see.

## Acceptance Criteria

1.  The "Query Builder" panel contains controls to add new filter rules and rule groups.
2.  A single filter rule consists of a key selector (dropdown), an operator selector (dropdown), and a value input (text field).
3.  The operator dropdown includes all specified operators (`equals`, `contains`, `exists`, etc.).
4.  The key selector dropdown is populated with the flattened list of keys from the schema discovery (e.g., `user.address.city`).
5.  Users can add multiple rules to the canvas.
