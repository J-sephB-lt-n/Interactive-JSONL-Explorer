# Story 1.3: File Upload Functionality

- **As a** user,
- **I want** to upload JSONL files using both a file picker and drag-and-drop,
- **so that** I can choose the most convenient method for loading my data.

## Acceptance Criteria

1.  An "Upload Files" button is visible and clickable, which opens the OS's native file selection dialog.
2.  A designated drop zone is visually indicated in the UI (e.g., when a file is dragged over the window).
3.  Users can select/drop one or more files with a `.jsonl` extension.
4.  After a successful upload from either method, the names of the uploaded files are displayed in the "Files & Schema" sidebar.
5.  The application correctly handles cases where the user cancels the file selection.
6.  The application ignores non-`.jsonl` files and provides clear user feedback if they are dropped.
