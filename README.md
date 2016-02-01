# ES6 Karma Jasmine Webpack Boilerplate

_No Grunt/Gulp required!_

Boilerplate for building a client-based JavaScript library in ES6 using the following components:

Configure
---------

# Change package.json main field to be your library_name.js
# Change package.json build scripts from Calculator to your library_name.js
# Make your library while `npm run test:dev` is executing

Features
--------

* [Webpack](https://github.com/webpack/webpack)
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised
  * Chrome
  * Code coverage reports
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-istanbul](https://github.com/ambitioninc/babel-istanbul)
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this!

Usage
-----
* `npm run test` - Runs unit tests with Karma and generates a coverage report
* `npm run test:dev` - Runs Karma and watches for changes to re-run tests also runs view-coverage
* `npm run view-coverage` - Runs a watching server on the code coverage folder and opens it at port 3001
* `npm run lint`- Lint all `.js` files.
* `npm run lint:fix` - Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).
* `npm run clean` - removes the dist and build folders
* `npm run build` - produces your library



## Credits
* https://github.com/zyml/es6-karma-jasmine-webpack-boilerplate
* https://github.com/davezuko/react-redux-starter-kit
