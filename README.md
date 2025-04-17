# Vite React 3D App
## Requirements

- [NodeJS 18+](https://nodejs.org/en)
If you'd like to use the included Dockerfile then [Docker](https://www.docker.com) is required as well:

## Getting Started

Getting started is a simple as cloning the repository```

Installing dependencies
```
npm install
```
And running the setup script (initializes git repository and husky and installs playwright)
```
npm run setup
```
To start project on Local
```
npm run dev
```
To Build project
```
npm run build
```

## Testing

Unit testing is handled by React Testing Library and Vitest while End-to-End (E2E) Testing is conducted by Playwright.

If you'd like to run all tests, Unit and E2E alike, execute the following command:

```
npm run test
```

### Unit Testing

When running unit test scripts, it is assumed that unit tests will be colocated with the source files. Take a look at the placeholder README file in `src/components` for [an example](src/components/README.md).

If you'd like to execute unit tests specifically, the below command will execute vitest:

```
npm run test:unit
```

If instead you are interested in coverage reporting, run:

```
npm run test:unit:coverage
```
### Without Docker

Deploying is as easy as running

```
npm run build
```

and pointing your web server to the generated `index.html` file found at `dist/index.html`

