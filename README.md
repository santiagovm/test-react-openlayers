# Test OpenLayers #10

This project is a PoC to unit test OpenLayers in a React application. The challenge when testing these components is 
that OpenLayers uses ES2015 Modules which do not run in NodeJS. Tests Runners by default use "fake browsers" in NodeJS to run tests (e.g. jsdom)

The solution is to transpile the OpenLayers package so it runs in NodeJS. This is achivied by adding the following
section in package.json:

```json
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(ol)/)"]
  }
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), which by default 
is configured to transpile all code except the node_modules folder. The customization above changes that default 
behavior indicating that everything in the node_modules should be ignored for transpiling, except the folder `ol` (OpenLayers)

### running tests in electron

Also, added an additional test runner: electron.

```bash
yarn run test-electron
```
