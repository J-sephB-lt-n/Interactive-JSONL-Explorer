# Story 3.1: Filtering Engine

- **As a** developer,
- **I want** a filtering engine that can execute the user-defined query against the in-memory data,
- **so that** we can find all matching JSON entries.

## Acceptance Criteria

1.  A function is created that takes the array of all parsed JSON objects and the query model from Epic 2 as input.
2.  The engine correctly evaluates nested `AND`/`OR` groups.
3.  The engine correctly applies all filter operators (`equals`, `contains`, `exists`, etc.) on the specified key paths.
4.  The engine correctly handles type differences (e.g., string vs. number comparisons).
5.  The function returns a new array containing only the JSON objects that match the query.
6.  The filtering process is automatically re-triggered whenever the user modifies the query.
