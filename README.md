# GoDaddy repositories viewer

React/Vite single page application app

## Prerequisites

- Node V20+

## How to run the project?

1. Clone the repo: `git clone https://github.com/edwinvillota/GDDY-repos.git`
2. Install dependencies: `npm run install`
3. Rename the file `.env.example` to `.env` to add the necessary environment
   variables.
4. Run the project: `npm run dev`
5. Open `http://localhost:3000/`

## Stack description

- **Library/Framework**: React v19, Typescript v5
- **State manager**: Tanstack/react-query v5
- **Bundler**: Vite
- **Styles**: Tailwindcss v4
- **Routes**: React Router v7
- **Testing**: Vitest v3, React testing library v16
- **Tools**:
  - **husky**: Git hooks
  - **biome**: Linter (Faster than ESlint)

## Stack decisions justification

- **Tanstack/react-query v5**: Efficiently manages server state and caching in
  React applications, reducing boilerplate and improving data fetching
  performance.
- **Vite**: Provides fast development startup and hot module replacement compared
  to Webpack, thanks to native ES modules and optimized build process.
- **Vitest**: Offers lightning-fast unit testing with native ESM support and
  instant feedback, outperforming Jest in speed and integration with Vite
  projects.

## Future Improvements

- Add integration tests to the screens components (probably using MSW to mock
  API responses).
- Add E2E tests with cypress or playwright.
- Enhance the repository details screen (the API doesn't provide enough data
  to build a comprehensive screen).
- Add page navigation animations (using View Transitions API)
