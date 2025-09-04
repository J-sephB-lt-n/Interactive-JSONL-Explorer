# Story 2.4: Advanced Query Logic (AND/OR Groups)

- **As a** user,
- **I want** to combine multiple filter rules with AND/OR logic,
- **so that** I can create complex and precise queries.

## Acceptance Criteria

1.  The query builder supports adding "groups" of rules.
2.  Each group can be set to either `AND` (all rules within must match) or `OR` (any rule within can match).
3.  Groups can be nested within other groups to create advanced query logic (e.g., `(A AND B) OR C`).
4.  The UI clearly visualizes the nesting and logic of the rules and groups (e.g., through indentation and borders).
5.  As the user builds the query, a corresponding JSON representation of the query is maintained in the application's state.
