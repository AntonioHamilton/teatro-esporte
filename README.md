# Basic Next.js Template

This is a basic Next.js template to start new projects. It comes with ESLint, Prettier, and styled-components configured, and an example page.

## Functionalities

This is a simple boilerplate. The main functionalities are:
- A Next.js setup with TypeScript.
- Basic routing with the `pages` directory.
- Linting with ESLint and code formatting with Prettier.
- Styling with styled-components.

## Project Structure

The project structure follows the conventions defined in `GEMINI.md`:

- `src/`: Contains all the source code.
  - `pages/`: Next.js pages.
  - `components/`: Reusable components.
  - `styles/`: Global styles and SCSS modules.
  - `services/`: API services.
  - `utils/`: Utility functions.
  - `types/`: Global TypeScript types.
- `public/`: Static files.
- `GEMINI.md`: AI rules for this project.

## How to run locally

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to interact with it

- The main page is `src/pages/index.tsx`. You can start by editing this file.
- Create new pages by adding files to the `src/pages` directory.
- Create reusable components in the `src/components` directory.
- Use the `npm run lint` command to check for linting errors.