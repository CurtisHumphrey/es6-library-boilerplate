# ES6 Karma Jasmine Webpack Boilerplate
[![Build Status](https://travis-ci.org/CurtisHumphrey/es6-library-boilerplate.svg?branch=master)](https://travis-ci.org/CurtisHumphrey/es6-library-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/CurtisHumphrey/es6-library-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/CurtisHumphrey/es6-library-boilerplate?branch=master)
[![Dependency Status](https://david-dm.org/CurtisHumphrey/es6-library-boilerplate.svg)](https://david-dm.org/CurtisHumphrey/es6-library-boilerplate)
[![devDependency Status](https://david-dm.org/CurtisHumphrey/es6-library-boilerplate/dev-status.svg)](https://david-dm.org/CurtisHumphrey/es6-library-boilerplate#info=devDependencies)

_No Grunt/Gulp required!_

Boilerplate for building a client-based JavaScript library in ES6 using the following components:

Table of Contents
-----------------
1. [Configure Steps](#configure)
1. [Features](#features)
1. [Usage](#usage)


Configure
---------

1. Change package.json main field to your library_name.js
2. Change package.json build scripts from Calculator to your library_name.js
3. Change webpack.config.base.js library field from calculator to your library_name
4. Make your library while `npm run test:dev` is executing
5. Setup Travis CI
6. Setup Coveralls.io
7. Upload to github to share!

Features
--------

* [Webpack](https://github.com/webpack/webpack)
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised
  * [Rewire enabled](https://github.com/speedskater/babel-plugin-rewire)
  * PhantomJS and Chrome
  * Code coverage reports
  * Uploading to coveralls (https://github.com/caitp/karma-coveralls)
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-istanbul](https://github.com/ambitioninc/babel-istanbul)
* [ESLint](http://eslint.org)
  * Uses airbnb/base plus some additional good rules

Usage
-----
* `npm run test` - Runs unit tests with Karma and generates a coverage report
* `npm run test:dev` - Runs Karma and watches for changes to re-run tests also runs view-coverage
* `npm run test:web` - same as test but runs them in Chrome
* `npm run test:dev:web` - same as test:dev but runs them in Chrome
* `npm run view-coverage` - Runs a watching server on the code coverage folder and opens it at port 3001
* `npm run lint`- Lint all `.js` files.
* `npm run lint:fix` - Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).
* `npm run clean` - removes the dist and build folders
* `npm run build` - produces your library



## Credits
* https://github.com/zyml/es6-karma-jasmine-webpack-boilerplate
* https://github.com/davezuko/react-redux-starter-kit
