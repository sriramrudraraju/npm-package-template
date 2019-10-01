# NPM Package Template

Template for creating npm modules. Including react components.

[Example](https://github.com/sriramrudraraju/sriram-npm-package-example) using this template.

## Using the template

### clone or click `use this template` feature
* Tweak necessary values in package.json

### `npm install`
Installs dependencies.

### `npm run test`
runs unit test cases using [jest](https://jestjs.io/en/) (and [enzyme](https://airbnb.io/enzyme/) for react components)

### `npm run coverage`
gives unit tests coverage report.

### `npm run build`
creates `./dist` prod build folder.

### `npm link` 
 For local testing. More [info](https://docs.npmjs.com/cli/link)

### `npm publish` 
Publishes to npm. (have to login if needed using `npm login`)

### Github actions for CI/CD
create `.yml` file for github actions in `.github/workflows` and paste the code

```
name: Publishing to npm

on:
  push:
    branches:
    - master

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: installing dependencies
      run: npm install
    - name: running unit tests
      run: npm run test
    - name: generating production build
      run: npm run build
    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_AUTH_TOKEN }}
 ```
 * Above code was simple CI/CD for pushing to npm when some code is pushed to master branch
 * ${{ secrets.NPM_AUTH_TOKEN }} was set using [github secrets](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables)
 * NPM_AUTH_TOKEN is obtained from [npm](https://docs.npmjs.com/creating-and-viewing-authentication-tokens)
 
 ### Storybook Integration
 * code example with integrated [storybook](https://storybook.js.org/) is on `story-book` branch
