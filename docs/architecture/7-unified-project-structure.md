# 7. Unified Project Structure

The project will be organized to separate source code from build artifacts, promoting a clean and maintainable structure.

```plaintext
interactive-jsonl-explorer/
├── .vscode/                 # VSCode settings
├── dist/                    # Build output directory
│   └── index.html           # The final, single-file application
├── public/                  # Static assets (if any, like a favicon)
├── src/                     # Application source code
│   ├── components/          # UI component modules
│   │   ├── QueryBuilder.js
│   │   ├── ResultsView.js
│   │   └── ...
│   ├── services/            # Core logic modules
│   │   ├── stateService.js  # Pub/Sub state manager
│   │   └── queryEngine.js   # Filtering logic
│   ├── workers/             # Web Worker scripts
│   │   └── parser.worker.js
│   ├── styles/              # CSS files
│   │   └── main.css
│   ├── utils/               # Helper functions
│   │   └── dom.js
│   └── main.js              # Main application entry point
├── index.html               # The HTML template for the build
├── package.json
├── vite.config.js           # Vite build configuration
└── README.md
```
