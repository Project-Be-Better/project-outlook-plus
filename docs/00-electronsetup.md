# Electron App Setup & Concepts

This document summarizes the key steps and concepts we've learned for getting an Electron + TypeScript application running.

---

## 1. **Project Structure**

- **Electron code** is placed in the `electron/` folder (`main.ts`, `preload.ts`).
- **Frontend code** (e.g., React, Vite, etc.) is typically in a separate folder (like `frontend/`).
- **Build outputs** go to `dist-electron/` for Electron code and `frontend/dist/` for frontend assets.

---

## 2. **TypeScript Configuration**

- The Electron code uses a dedicated `tsconfig.json` in the `electron/` folder.
- Key settings:
  - `"target": "ES2020"`: Output modern JavaScript.
  - `"module": "commonjs"`: Use CommonJS modules (required by Electron main process).
  - `"outDir": "../dist-electron"`: Compiled JS goes here.
  - `"types": ["node", "electron"]`: Enables Electron and Node.js type definitions.

**How to compile:**

```sh
npx tsc --project electron/tsconfig.json
```

---

## 3. **Electron Main Process (`main.ts`)**

- Responsible for creating the main application window.
- Loads either a local frontend build or a dev server (e.g., Vite/React).
- Uses `preload.js` for secure communication between the frontend and Electron APIs.
- Handles platform-specific behaviors (like macOS window re-creation).

---

## 4. **Preload Script (`preload.ts`)**

- Runs in a secure context before the frontend loads.
- Uses `contextBridge` to safely expose APIs to the frontend.
- Example: Exposing IPC methods for communication between renderer and main process.

---

## 5. **Building and Running**

**Frontend:**

- Build your frontend (e.g., React/Vite):
  ```sh
  npm run build
  ```
  This outputs static files to `frontend/dist/`.

**Electron:**

- Compile Electron TypeScript:
  ```sh
  npx tsc --project electron/tsconfig.json
  ```
- Run Electron in development:
  ```sh
  npx electron dist-electron/main.js
  ```
  (Adjust path if your output is different.)

---

## 6. **Packaging the App**

- Use a tool like `electron-builder` to package your app for distribution.
- Add a script to `package.json`:
  ```json
  "scripts": {
    "pack": "electron-builder"
  }
  ```
- Run:
  ```sh
  npm run pack
  ```

---

## 7. **Key Concepts**

- **Main Process:** Controls the app lifecycle and windows.
- **Renderer Process:** Runs your frontend (HTML/JS/CSS).
- **Preload Script:** Securely exposes APIs to the frontend.
- **IPC (Inter-Process Communication):** Allows main and renderer to communicate.
- **TypeScript:** Adds type safety and better tooling.
- **Build Tools:** Compile TypeScript and bundle frontend assets.

---

**Summary:**  
We set up a secure, maintainable Electron app using TypeScript, with a clear separation between main, preload, and frontend code. We learned how to build, run, and package the app, and why each step is important for security and developer experience.
