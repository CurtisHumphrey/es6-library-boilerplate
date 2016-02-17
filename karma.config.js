var path = require('path');
var argv = require('yargs').argv;
process.env.BABEL_ENV = 'karma';

const coverage_reporters = [
  { type: 'text-summary' },
];
const reporters = [
  'spec',
  'coverage',
];
var browsers = ['PhantomJS']; // for local builds
var sauceLaunchers = require('./tools/browsers_to_saucelabs')(require('./saucelab_browsers'));

if (process.env.TRAVIS) {
  console.log('On Travis sending coveralls');
  coverage_reporters.push( { type : 'lcov', dir : 'coverage' } );
  reporters.push('coveralls');
} else {
  console.log('Not on Travis so not sending coveralls');
  coverage_reporters.push( { type : 'html', dir : 'coverage', 'subdir' : '.' } );
}
if (process.env.SAUCE_USERNAME) {
  console.log('Will use sauceLabs');
  reporters.push('saucelabs');
  browsers = Object.keys(sauceLaunchers);
} else {
  console.log('No sauceLabs');
}


module.exports = function (config) {
  config.set({
    browsers: browsers,
    coverageReporter: {
      reporters: coverage_reporters,
    },
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js',
    ],
    singleRun: !argv.watch,
    frameworks: [
      'mocha',
      'chai-sinon',
      'chai-as-promised',
      'chai',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: reporters,
    sauceLabs: {
        testName: 'es6 library boilerplate'
    },
    customLaunchers: sauceLaunchers,
    plugins: [
      'karma-chai',
      'karma-chai-as-promised',
      'karma-chai-sinon',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-coveralls',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-sauce-launcher',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack',
    ],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      debug: true,
      module: {
        preLoaders: [
          {
            test: /spec\.js$/,
            include: /src/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components|spec)/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
        ],
        loaders: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /(bower_components|node_modules|spec)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
    },
  });
};
