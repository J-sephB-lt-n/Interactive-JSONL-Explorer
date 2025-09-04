# 4. Data Models

The primary data structure is the JSON object parsed from the user's files, augmented with metadata.

## `LogEntry`

**Purpose:** Represents a single parsed JSON object from a JSONL file, with added metadata for tracking its origin.

**Key Attributes:**
- `id`: `string` - A unique identifier assigned to the entry for rendering purposes.
- `sourceFile`: `string` - The name of the file this object was parsed from.
- `data`: `object` - The original JSON object parsed from the file line.

### Data Structure

```javascript
/**
 * Represents a single log entry.
 * @typedef {object} LogEntry
 * @property {string} id - A unique identifier for the entry.
 * @property {string} sourceFile - The name of the file the entry came from.
 * @property {object} data - The parsed JSON object.
 */
```
