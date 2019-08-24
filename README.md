<h1 align='center'>Base</h1>

## 🌱 Base

The base foundation for a web application created by [Vi](https://www.github.com/victoriahchang).

## 🤔 Contents

This repo was built on Gatsby which includes `React`, `GraphQL`, `Webpack`. Base uses `Sass` as the style sheet language, `Prettier` and `ESLint` as linters, and `Jest` for testing. `Normalize.css` renders element styles to be consistent and current with modern browser standards. `Husky` and `lint-staged` run after `git add`.

The 4 new directories in root are `components/`, `images/`, `pages/`, and `styles/`. The 2 starter pages are `index` and `error`. The 4 basic components with respective tests are `Header`, `Footer`, `Layout`, and `Metadata`. Use `Layout` to build pages. `Metadata` is a SEO component that uses `React-Helmet`. The 2 stylesheets are `base` and `typography`.

Update your site metadata and add your Google Analytics ID in `gatsby-config.js`.

## 🤖 Instructions

1. In your terminal, clone the repo.
    ```sh
        git clone git@github.com:victoriahchang/base.git
    ```
2. In your terminal, go to the repo directory and run the start script.
     ```sh
        cd base/
        npm run start
    ```
3. In your editor, open the source code to start developing.
4. In your browser, open [`http://localhost:8000`](http://localhost:8000) to view live changes.

## 🚀 Scripts

- `npm run start`: Gatsby starts the server, builds `.cache`, and updates `public/`. View the development site: [`http://localhost:8000`](http://localhost:8000)
- `npm run build`: Gatsby creates the production build.
- `npm run serve`: View the production site: [`http://localhost:9000`](http://localhost:9000)
- `npm run format`: Prettier checks `**/*.{js,jsx,json,md}` files.
- `npm run sass`: Sass watches changes in `.scss` files to compile styles into `base.css`.
- `npm run test`: Jest checks `*.test.js` files.
- `npm run lint`: ESLint checks `src/`.
- `npm run clean`: Gatsby resolves cache errors.

## 💌 Contact
If you have feedback or questions, please contact Vi: `halp [dot] me [at] victoriahchang [dot] com`.