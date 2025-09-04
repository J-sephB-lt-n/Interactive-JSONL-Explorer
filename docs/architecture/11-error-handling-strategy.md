# 11. Error Handling Strategy

The application will handle errors gracefully to prevent crashes and provide clear feedback to the user.

*   **File Parsing Errors:** The `FileParserService` (Web Worker) will wrap the `JSON.parse()` call in a `try...catch` block for each line.
    *   If a line fails to parse, the worker will not terminate. Instead, it will increment an error counter and post a message to the main thread containing the source filename, line number, and error message.
    *   Malformed lines will be ignored and excluded from the data set.

*   **User Interface Feedback:**
    *   The main UI will listen for these error messages from the parser.
    *   A dedicated and clearly visible status area within the "Files & Schema" sidebar will explicitly report all file parsing errors to the end-user.
    *   This status area will display a clear summary of the issues (e.g., "File `logs.jsonl`: Skipped 3 malformed lines."). The user will be able to click this summary to view more details about the specific line numbers and errors.
    *   The developer console will still contain detailed logs of each parsing error for debugging purposes.

This approach ensures the application remains robust and responsive, even with imperfect data, a core requirement from the PRD.
