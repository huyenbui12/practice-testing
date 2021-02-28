# Getting started

## Prerequisites

- Ensure `Node 12` installed

## How to run

- Run `npm install`

- Create `applyData.json`  which contains apply information (fullname, email, searchkey - a key to search for the job, cvpath - a path that links to CV in your computer) and `endpointData.json` with testing endpoint in `data` folder with below structure:

#### data/applyData.json
```json
{
  "fullname":"***",
  "email":"***",
  "cvpath":"***",
  "searchkey":"***"
}
```

#### data/endpointData.json
```json
{
    "BaseURL": "***"
}
```
- Run `npm run` with name of script (config in `package.json`). Example: `npm run apply`

## How to add new Test Suite
- Create new test file in `test/specs` (Ex: `test/specs/apply-job.js`)
- Add the test file path into the `suites` in the `wdio.conf.js` file (Ex: `apply`)

#### wdio.conf.js
```js
{
    suites: {
        ...
        apply: ['./test/specs/apply-job.js']
    }
}
```
- Add the new `scripts` into the `package.json` (Ex: `apply`)

#### package.json
```json
"scripts": {
    "apply": "npx wdio wdio.conf.js --suite apply"
},
```

- Run `npm run` with that script that created in `package.json` (Ex: `npm run apply`)

## How to debug

- Edit `args` with test case that need to debug in `.vscode/launch.json`. Example for `apply-job.js` in the below.

#### .vscode/launch.json
```js
{
    "args": [
        "--spec", "apply-job.js"
    ]
}
```

- Select `Run in debug` in `Run` tab of VSCode 

## Documentation

- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted.html)

