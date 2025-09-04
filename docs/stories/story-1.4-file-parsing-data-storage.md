# Story 1.4: File Parsing & Data Storage

- **As a** user,
- **I want** the application to process the uploaded files,
- **so that** the data is ready for querying.

## Acceptance Criteria

1.  Upon file upload, the application reads the content of each `.jsonl` file.
2.  Each line in the file is parsed as a separate JSON object.
3.  Malformed JSON lines are gracefully handled and logged to the developer console without crashing the application.
4.  The parsed JSON objects from all files are stored in a single data structure in memory.
5.  Each stored object is augmented with metadata indicating its source filename.
6.  A loading indicator is displayed while files are being parsed.
