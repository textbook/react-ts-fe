# React-TS-FE

[![CircleCI](https://circleci.com/gh/textbook/react-ts-fe.svg?style=svg)](https://circleci.com/gh/textbook/react-ts-fe)

Bootstrap for a React TypeScript front-end.

## What is this?

It's a bootstrap starter project to get up and running with a minimal React
front-end using TypeScript. It's an alternative to `create-react-app`, with
no hidden/magic configuration, and easy deployment to Cloud Foundry, Heroku or
Netlify.

It was extracted from the TypeScript branch of my existing full-stack starter
kit: https://github.com/textbook/starter-kit/tree/typescript.

## How do I use it?

For the most part you should just be able to write your code and tests in the
`src/` directory. Imports of `.css` or `.scss` style files are handled
appropriately, for anything else (e.g. images) you will need to extend the
Webpack configuration, found in the `webpack/` directory.

### Scripts

The following scripts are provided to support the developer experience:

- `npm run build`: Create the production build in `dist/`
- `npm run deploy:cf`: Create the production build and deploy it to Cloud
    Foundry. Assumes you have the [CF CLI] installed and that you're logged in
    to the appropriate foundation/org/space.
- `npm run deploy:heroku`: Create the production build and deploy it to
    Heroku. Assumes you have the [Heroku CLI] installed and you've created the
    app you want to deploy to (run `heroku create --help` for guidance).
- `npm run deploy:netlify`: Create the production build and deploy it to
    Netlify. Assumes you have the [Netlify CLI] installed.
- `npm run dev`: Start the Webpack dev server locally
- `npm run lint`: Lint the code using ESLint
- `npm run ship`: Lint and test the code
- `npm run test`: Test the code using Jest
- `npm run test:dev`: Ensure the dev mode can start up correctly

Note all deployments enable push-state routing, for use with e.g. React
Router, and force HTTPS.

[CF CLI]: https://docs.cloudfoundry.org/cf-cli/install-go-cli.html
[Heroku CLI]: https://devcenter.heroku.com/articles/heroku-cli
[Netlify CLI]: https://docs.netlify.com/cli/get-started/
