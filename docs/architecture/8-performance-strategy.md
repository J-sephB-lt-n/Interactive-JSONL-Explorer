# 8. Performance Strategy

Client-side performance is the most critical non-functional requirement. The strategy is twofold:

1.  **Non-Blocking Parsing with Web Workers:**
    *   File reading and JSON parsing are the most CPU-intensive tasks. By moving this work to a Web Worker, the main UI thread remains responsive, allowing the user to interact with the application even while large files (100MB+) are being processed.
    *   The worker will stream parsed objects back to the main thread incrementally, allowing the UI to update the total count without waiting for the entire file to be processed.

2.  **Efficient Rendering with Virtual Scrolling:**
    *   Rendering a large number of DOM nodes (e.g., 10,000+ log entries) is the primary cause of UI sluggishness. A virtual scrolling implementation for the `ResultsView` will be created.
    *   This technique calculates which log entries are currently in the viewport and renders only those DOM nodes. As the user scrolls, nodes that move out of view are removed or recycled, and new nodes are rendered just in time. This keeps the DOM size small and ensures a smooth scrolling experience regardless of the total number of results.
