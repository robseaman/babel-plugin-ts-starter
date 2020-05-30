# Babel Plugin TypeScript Starter

I created this starter for writing Babel Plugins in TypeScript. It was derived from the last step of my [babel-playground](https://github.com/robseaman/babel-playground).

## Installation

```bash
yarn
```

## Usage

- `yarn test` run a test suite with text fixtures. Output is checked against a Jest snapshot. There is also a vscode debug configuration called `Jest Babel Plugin`, breakpointing works OK but not great for the plugin.
- `yarn watch` runs test suite in watch mode.
- `yarn coverage` tests and runs a coverage report.
- `yarn lint` linting of code and markdown docs. A placeholder for linting code in markdown also exists. `prettier` is also including in the linting.
- `yarn type-check` ... just that
- `yarn build` creates build targeted at node 6.9, chose based on current `nodeVersion` in Babel's [babel.config.js](https://github.com/babel/babel/blob/master/babel.config.js).

## Possible Changes

I'm starting with this simple approach but here are ideas for changes and reasons behind them that make may sense depending on your use case.

- The Jest snapshot support could be augemented or replaced with an `output.js` result file for comparing. This wouldn't be much code and it could be derived from the functionality for handling input and option files. At a minimum this would require `.strip()` or [dedent](https://github.com/dmnd/dedent) to avoid formatting issues when comparing. _Why do this?_ Snapshots require diligence to avoid human error; having input and output in the same test case fixure directory would be easier for reference; moving to something other than Jest would be easy with this support. _Why not?_ More code for questionable benefit; snapshots done in a standard way are recognizable; manual manipulation of the output result is elimanted; I only use Jest.
- Replace the test infrastructure with [babel-plugin-tester](https://github.com/babel-utils/babel-plugin-tester). _Why?_ babel-plugin-tester provides a complete infrastructure for testing; it works with other, non-jest, runners. _Why not?_ I only use Jest; I don't want to count on or do my own future support of babel-plugin-tester, it's only 40 lines of in your face code to do what I need, so a feature rich abstraction is more of a distraction than a benefit.

## References

- [AST Explorer](https://astexplorer.net/#)
- [Babel repl](https://babeljs.io/repl)
- [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
- [Babel AST Spec](https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md)
- [@babel/helper-plugin-test-runner](https://github.com/babel/babel/tree/master/packages/babel-helper-plugin-test-runner) which uses the [@babel/helper-transform-fixture-test-runner](https://github.com/babel/babel/tree/master/packages/babel-helper-transform-fixture-test-runner) for implementing tests for the official `@babel` plugins. This doesn't look suitable outside of the mono repo but could be adapted to something general purpose.
- [babel-plugin-tester](https://github.com/babel-utils/babel-plugin-tester) A complete test wrapper for testing a plugin. Get this if the last demo in this doc lacks the functionality you want or you don't like seeing the 30 some lines of setup code in your tests.
