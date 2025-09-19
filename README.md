# Teatro Esporte Club Website

This is the official website for the Teatro Esporte Club, an improvisation school based in Aracaju, Brazil. The project is built with Next.js and showcases the school's classes, workshops, and shows.

## About Teatro Esporte

Teatro Esporte is a school dedicated to teaching the art of improvisation. The main goal is to help students improve their communication skills, boost their creativity, and build confidence through improv classes and comedy shows.

## Features

- **Class Information:** View details about available classes for adults, such as "Academia Despertar Criativo" and "Teatro Esporte Club".
- **Past Workshops:** See information about past workshops, like "Workshop Despertar Criativo" and "Workshop Palhaço Interior".
- **Responsive Design:** The website is designed to work on different devices.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Library:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Styled Components](https://styled-components.com/)
- **Linting:** [ESLint](https://eslint.org/)
- **Formatting:** [Prettier](https://prettier.io/)

## Project Structure

The project structure follows the conventions defined in `GEMINI.md`:

- `src/`: Contains all the source code.
  - `pages/`: Next.js pages.
  - `components/`: Reusable React components.
  - `styles/`: Global styles and styled-components definitions.
  - `services/`: API service integrations.
  - `utils/`: Utility functions.
  - `types/`: Global TypeScript types.
- `public/`: Static files like images and fonts.
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

## How to contribute

- The main page is `src/pages/index.tsx`. You can start by editing this file.
- Create new pages by adding files to the `src/pages` directory.
- Create reusable components in the `src/components` directory.
- Use the `npm run lint` command to check for linting errors before committing.
