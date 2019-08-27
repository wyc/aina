<h1 align='center'>🏝 Āina</h1>

## 🤔 About

__Āina__ means *__land__* in Hawaiian. This is new found land to build your awesome static progressive web application.

- UI frameworks: `React`, `Gatsby`
- Superset language: `TypeScript`
- Data query language: `GraphQL`
- Style sheet language: `Sass`
- Static module bundler: `Webpack`
- Testing framework: `Jest`
- Linting tools: `TSLint`, `ESLint`, `Prettier`, `Husky`, `lint-staged`
- Dependency management: `Yarn`

## 📖 Contents

- Directories: `components/`, `images/`, `pages/`, `styles/`, `templates/`, `utils/`, `__mocks__`
- Pages: `index`, `error`
- Components: `Header`, `Footer`, `Layout`, `Metadata`
  - Use `Layout` as a base component to build pages
  - `Metadata` is a SEO component that uses `React-Helmet`
- Stylesheets: `base`, `_typography`, `_layout`

## 🤖 Instructions

1. In the __terminal__, clone the repo.
  ```sh
    git clone git@github.com:victoriahchang/aina.git
  ```
2. In the __terminal__, go to the repo directory and run the start script.
  ```sh
    cd aina/
    npm run start
  ```
3. In the __editor__, open the source code to start developing.
4. In the __browser__, view live changes: [`http://localhost:8000`](http://localhost:8000)

## 🚀 Scripts

- `Gatsby` starts the development server: [`http://localhost:8000`](http://localhost:8000)
  ```sh
    npm run start
  ```

- `Gatsby` creates the production build.
  ```sh
    npm run build
  ```

- `Gatsby` starts the production server: [`http://localhost:9000`](http://localhost:9000)
  ```sh
    npm run serve
  ```

- `TypeScript` builds `**/*.{ts,tsx}` files into `/out`.
  ```sh
    npm run build-ts
  ```

- `TypeScript` watches and builds `**/*.{ts,tsx}` files into `/out`.
  ```sh
    npm run build-ts-watch
  ```

- `Jest` checks `*.test.{ts,tsx}` files.
  ```sh
    npm run test
  ```

- `Jest` watches and checks `*.test.{ts,tsx}` snapshots.
  ```sh
    npm run test-watch
    ```

- `Jest` updates `*.test.{ts,tsx}` snapshots.
    ```sh
    npm run test-update
    ```

- `ESLint` checks `src/**/*.{ts,tsx}`.
    ```sh
    npm run lint-eslint
    ```

- `Prettier` checks `**/*.{js,jsx,json,md}` files.
    ```sh
    npm run lint-prettier
    ```

- `TSLint` checks `src/**/*` files.
    ```sh
    npm run lint-ts
    ```

- `ESLint`, `Prettier`, and `TSLint` scripts run.
    ```sh
    npm run lint
    ```

- `Sass` watches changes in `.scss` files and compile styles into `base.css`.
    ```sh
    npm run sass
    ```

- `Gatsby` removes files in `.cache` and `public/`. This is a destructive process so use as last resort.
    ```sh
    npm run clean-cache
    ```

- `Yarn` removes files specified in `.yarnclean`. This is a destructive process so use as last resort.
    ```sh
    npm run clean-yarn
    ```

## 🗒 Notes

- `Normalize.css` renders element styles to be consistent and current with modern browser standards.
- In `gatsby-config.js`, add your site metadata and Google Analytics ID.

## 🌟 Credit

Like __Āina__? Show some *aloha* (love) and *mahalo* (thanks) with a credit in your repo or star on GitHub.

Example:
> Made with Āina by [`@victoriahchang`](https://github.com/victoriahchang).


## 💌 Contact

Please email me if you have feedback or questions: `aina [at] victoriahchang [dot] com`.
