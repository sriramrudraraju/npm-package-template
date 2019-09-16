# NPM Package Template

Template for creating npm modules.

[Example](https://github.com/sriramrudraraju/sriram-npm-package-2) using this template.

## Using the template

### clone or click `use this template` feature

### Package.json
 Tweak necessary values in package.json

### `npm install`
Installs dependencies.

### Testing in local
`npm link` for local testing. More [info](https://docs.npmjs.com/cli/link)

### `npm run build`
creates `./dist` prod build folder.

### `npm publish` 
Publishs to npm. (have to login if needed using `npm login`)

### Github actions for CI/CD
create `.yml` file for github actions in `.github/workflows` and paste the code

```
name: Node CI

on:
  push:
    branches:
    - master

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: install dependencies
      run: npm install
    - name: production build
      run: npm run build
    - name: npm publish
      run: |
        npm config set //registry.npmjs.org/:_authToken=$NODE_AUTH_TOKEN
        npm publish
      env:
        CI: true
        NODE_AUTH_TOKEN: ${{ secrets.NPM_AUTH_TOKEN }}
 ```
 * Above code was simple CI/CD for pushing to npm when some code is pushed to master branch
 * ${{ secrets.NPM_AUTH_TOKEN }} was set using [github secrets](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables)
 * NPM_AUTH_TOKEN is obtained from [npm](https://docs.npmjs.com/creating-and-viewing-authentication-tokens)

## TODO

* Unit Testing
