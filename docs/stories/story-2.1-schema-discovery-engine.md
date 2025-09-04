# Story 2.1: Schema Discovery Engine

- **As a** user,
- **I want** the application to automatically discover all unique keys from my data,
- **so that** I can see the complete structure of my logs.

## Acceptance Criteria

1.  After data is parsed, a process is triggered to scan all JSON objects.
2.  The process recursively traverses nested objects and arrays to find all possible key paths.
3.  The final output is a de-duplicated, sorted list of all unique key paths (e.g., `user.id`, `user.address.city`).
4.  The discovery process correctly handles varied schemas where keys are not present in all objects.
5.  The list of discovered keys is stored in memory for use by the UI.
