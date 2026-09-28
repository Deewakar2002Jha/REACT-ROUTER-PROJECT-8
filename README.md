# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Student Information Application

This repository is a small React application created with Vite. The HTML document is the browser entry point, `src/main.jsx` mounts React, and `src/App.jsx` renders the current application UI.

At the moment, the application is a starter screen that displays `App`. The project name mentions React Router, but React Router is not installed or configured yet. Routes, pages, navigation, and route-based data loading can be added later.

## Requirements

- Node.js 20 or a newer LTS release
- npm, which is included with Node.js
- A modern browser

Check your installed versions:

```bash
node --version
npm --version
```

## Getting Started

From the project directory, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite prints a local URL in the terminal, usually `http://localhost:5173`. Open that URL in a browser. The development server provides fast hot module replacement (HMR), so most source changes appear without a full page reload.

## Available Commands

| Command           | Purpose                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| `npm install`     | Installs the packages listed in `package.json` and creates or updates `package-lock.json`.        |
| `npm run dev`     | Starts Vite's development server with HMR.                                                        |
| `npm run build`   | Creates an optimized production bundle in `dist/`.                                                |
| `npm run preview` | Serves the existing `dist/` build locally for a production-like check. Run `npm run build` first. |
| `npm run lint`    | Runs ESLint against the JavaScript and JSX source files.                                          |

Before sharing changes, a useful local check is:

```bash
npm run lint
npm run build
```

## Project Structure

```text
.
├── index.html              Browser document and Vite HTML entry point
├── package.json            Project metadata, dependencies, and scripts
├── package-lock.json       Exact dependency versions installed by npm
├── vite.config.js          Vite plugin configuration
├── eslint.config.js        ESLint rules and ignored paths
├── public/                 Static files copied without bundling
│   ├── favicon.svg
│   └── icons.svg
└── src/
		├── App.jsx             Root React component
		├── App.css             Component-level stylesheet (currently available for app styles)
		├── index.css           Global stylesheet and Tailwind import
		├── main.jsx            React mounting entry point
		└── assets/              Imported source assets
```

## How the Application Starts

The runtime flow is:

```text
index.html
		-> <div id="root"></div>
		-> /src/main.jsx
		-> createRoot(document.getElementById('root'))
		-> <StrictMode><App /></StrictMode>
		-> src/App.jsx
```

### `index.html`

This is the one HTML document loaded by the browser. Important parts are:

- `<!doctype html>` enables standards mode.
- `<meta charset="UTF-8">` supports normal Unicode text.
- The viewport meta tag makes the layout responsive on mobile devices.
- `<div id="root"></div>` is the empty DOM container that React controls.
- `<script type="module" src="/src/main.jsx">` loads the JavaScript entry module.
- The page title is currently `STUDENT INFORMATION APPLICATION`.
- `/favicon.svg` points to the favicon in the `public/` directory.

React does not replace the whole HTML document. It renders its component tree inside the `root` element.

### `src/main.jsx`

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Concepts used here:

- `import` loads code from another module.
- `createRoot` is the React 18+ API for attaching a React tree to a browser DOM node.
- `document.getElementById('root')` finds the mounting element from `index.html`.
- `<App />` is JSX syntax for creating an `App` component element.
- `StrictMode` enables extra development checks. It does not render visible UI and does not affect the production build.
- `import './index.css'` loads the global CSS before the application renders.

### `src/App.jsx`

`App` is a functional component:

```jsx
const App = () => {
  return <div>App</div>;
};
```

A React component is a JavaScript function that returns JSX. JSX looks like HTML, but it is compiled into JavaScript calls that create React elements. Components should begin with an uppercase letter so React treats them as custom components rather than native HTML tags.

The default export allows `main.jsx` to import the component with any local name, although using `App` keeps the code clear.

## React Concepts Used by This Project

### Components

Components divide an interface into reusable pieces. `App` is currently the root component. As the student application grows, it can be split into components such as `Header`, `StudentForm`, `StudentList`, and `StudentCard`.

### JSX

JSX lets a component describe UI declaratively:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

JavaScript expressions go inside `{}`. JSX must return one parent element or a fragment (`<>...</>`), and attributes use JSX names such as `className` instead of HTML's `class`.

### Props

Props are read-only values passed from a parent to a child:

```jsx
<StudentCard name="Asha" course="Computer Science" />
```

The child reads them through its function parameter. Props are the normal way to reuse a component with different student data.

### State

State is data that belongs to a component and can change over time. For example, a form could use `useState` for a student's name:

```jsx
const [name, setName] = useState("");
```

Calling `setName` schedules a re-render. State should be updated through its setter rather than mutated directly.

### Events

React handles browser events with camelCase properties such as `onClick` and `onChange`:

```jsx
<button onClick={() => setOpen(true)}>Open</button>
```

The value passed to `onClick` is a function. Do not call the function while rendering, because `onClick={setOpen(true)}` would execute immediately.

### Rendering and re-rendering

React re-runs components when their state or props change, compares the resulting element tree, and updates only the necessary DOM nodes. This is why changing one form field does not require manually editing the DOM.

### Hooks

Hooks are React functions that add behavior to function components. Common examples are `useState` for local state, `useEffect` for synchronizing with external systems, and `useContext` for shared values. Hooks must be called at the top level of a component or custom hook, never inside loops or conditions.

This starter does not currently use any hooks, but the ESLint configuration includes the official React Hooks rules.

## Styling and Tailwind CSS

Both `src/App.css` and `src/index.css` are available for stylesheets. `index.css` currently contains:

```css
@import "tailwindcss";
```

This imports Tailwind CSS 4 so utility classes can be used in JSX, for example:

```jsx
<h1 className="text-2xl font-bold">Students</h1>
```

The Tailwind Vite plugin in `vite.config.js` processes the import during development and production builds. CSS imported by JavaScript is included in Vite's dependency graph, so changes are reflected by HMR.

Use `className` in JSX, not `class`. Keep truly global rules in `index.css`; keep styles specific to a component in `App.css` or a nearby stylesheet.

## Vite

Vite is the development server and build tool. It provides:

- Fast development startup using native ES modules.
- HMR while editing source files.
- JSX transformation through `@vitejs/plugin-react`.
- Production bundling, minification, and asset handling.
- A `dist/` directory containing deployable output after `npm run build`.

`vite.config.js` registers two plugins:

- `@vitejs/plugin-react` enables React and JSX support.
- `@tailwindcss/vite` enables Tailwind CSS processing.

The project uses ES modules because `package.json` contains `"type": "module"`. That is why configuration files use `import` and `export default`.

## Dependencies

### Runtime dependencies

- `react`: component model, JSX runtime, state, and rendering APIs.
- `react-dom`: browser-specific React APIs such as `createRoot`.
- `tailwindcss`: utility-first CSS framework.
- `@tailwindcss/vite`: Tailwind 4 integration for Vite.

### Development dependencies

- `vite`: development server and production build tool.
- `@vitejs/plugin-react`: React support for Vite.
- `eslint`: JavaScript and JSX static analysis.
- `@eslint/js`: standard ESLint JavaScript rule sets.
- `eslint-plugin-react-hooks`: checks correct Hook usage.
- `eslint-plugin-react-refresh`: checks patterns needed for reliable React Fast Refresh.
- `globals`: browser global definitions for ESLint.
- `@types/react` and `@types/react-dom`: React type declarations, useful even though this project is currently JavaScript.

The version ranges are stored in `package.json`; the lockfile records the concrete versions installed locally. Commit both files so other developers and CI use the same dependency resolution.

## ESLint

`eslint.config.js` uses ESLint's flat configuration format. It:

- Ignores the generated `dist/` directory.
- Checks `.js` and `.jsx` files.
- Enables recommended JavaScript rules.
- Enables React Hooks rules.
- Enables React Refresh rules used by Vite.
- Defines browser globals such as `document` and `window`.

Linting finds likely mistakes before runtime, such as unused variables, invalid Hook usage, and patterns that interfere with Fast Refresh. Fix lint errors before committing new code.

## Public Files and Assets

Files in `public/` are served from the site root and are copied to the production output unchanged. The favicon is therefore referenced as `/favicon.svg`.

Assets imported from `src/assets/` are processed by Vite. Importing an asset from a component allows Vite to fingerprint and include it in the production bundle:

```jsx
import logoUrl from "./assets/logo.svg";

<img src={logoUrl} alt="Application logo" />;
```

Use `public/` for files that must keep a stable root URL. Use `src/assets/` for assets that belong to the module graph.

## Production Build and Deployment

Create the production bundle:

```bash
npm run build
```

The generated `dist/` directory is the deployable site. Test it locally with:

```bash
npm run preview
```

For a static host, publish the contents of `dist/`. Configure the host to serve `index.html` for the root path. When React Router is added later, configure the host's fallback/rewrite behavior so direct visits to application routes also return `index.html`.

Do not commit `node_modules/` or `dist/`; these are generated directories and should be excluded by the project's ignore configuration.

## Adding React Router Later

The current project has no routing package. To add client-side routes:

```bash
npm install react-router-dom
```

Then the usual structure is to create a router in `main.jsx` or `App.jsx`, define route components, and render links with React Router's `Link` or `NavLink`. Routing changes the visible component based on the URL without requesting a new HTML document for every navigation. It also requires production-server fallback configuration as described above.

## Recommended Growth Path

1. Replace the placeholder returned by `App` with the student information layout.
2. Extract repeated UI into components.
3. Add controlled form inputs with `useState`.
4. Add validation and a clear empty/loading/error state.
5. Store student records in component state or connect a backend API.
6. Add React Router only when the application needs multiple URL-addressable screens.
7. Add tests and keep `npm run lint` and `npm run build` in the development workflow.

## Troubleshooting

### `npm` is not recognized

Install Node.js LTS, reopen the terminal, and verify with `node --version` and `npm --version`.

### The browser shows a blank page

Check the terminal and browser console for errors. Confirm that `index.html` contains `<div id="root"></div>` and that `src/main.jsx` imports `App` from the correct path.

### Tailwind classes do not work

Confirm that `src/index.css` imports Tailwind and that `vite.config.js` includes `tailwindcss()` in its plugins. Restart the dev server after changing Vite configuration.

### The port is already in use

Vite normally offers another available port. Accept that URL, or stop the process using the original port before running `npm run dev` again.

### Build or lint errors appear after installing dependencies

Remove `node_modules/` and reinstall dependencies if the local install is incomplete:

```bash
npm install
npm run lint
npm run build
```

## Current Status

This is a working starter project with React, Vite, Tailwind CSS, ESLint, a favicon, and the React mounting pipeline configured. The student information features and React Router navigation still need to be implemented in the application components.
