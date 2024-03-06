# Brown University React Times

A time picker modeled after Airbnb's `react-dates` plus some test utils for use in React-based applications at Brown University.

---

## Usage

### 1. Install packages

#### Brown University React Times

```sh
// npm
npm i BrownUniversity/brown-university-react-times#semver:^2.0.0

// yarn
yarn add BrownUniversity/brown-university-react-times#^2.0.0
```

#### Required Peer Dependencies

These libraries are not bundled with Brown University React Times and are required at runtime:

- [**brown-university-styles**](https://github.com/BrownUniversity/brown-university-styles)
- [**react**](https://www.npmjs.com/package/react)
- [**styled-components**](https://www.npmjs.com/package/styled-components)

#### Optipnal Peer Dependencies

These libraries are not bundled with Brown University React Times, but are required to use the test utils:

- [**@testing-library/react**](https://www.npmjs.com/package/@testing-library/react)

Add the following to your `jest` `setupFilesAfterEnv` file to prevent `UnhandledPromiseRejectionWarning`s from `popper.js`:

```
document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document
  }
});
```

### 2. Import styles from Brown University Styles

---

## Documentation

The documentation is available at https://brownuniversity.github.io/brown-university-react-times/.

---

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080](http://localhost:8080/) with [storybook](https://storybook.js.org/):

```sh
npm start
```

Run tests:

```sh
npm test
```

Run tests with code coverage:

```sh
npm test:coverage
```

Run tests with code coverage and open report:

```sh
npm test:coverage:open
```

Watch tests:

```sh
npm run test:watch
```

---

## Deployment

To publish a new version, do the following:

1. Bump version in `package.json` and `package-lock.json`
2. Bump version in `README.md` install instructions (for major and minor version bumps only)
3. Update `CHANGELOG.md`
4. `npm run build`
5. Commit changes
6. Tag new version
7. Push master and tags to all remotes
