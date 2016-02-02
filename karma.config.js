var path = require('path');
var argv = require('yargs').argv;

const coverage_reporters = [
  { type: 'text-summary' },
];
const reporters = [
 'spec',
 'coverage',
];
if (process.env.COVERALLS_REPO_TOKEN) {
  console.log('coveralls found');
  coverage_reporters.push( { type : 'lcov', dir : 'coverage' } );
  reporters.push('coveralls');
} else {
  console.log('coveralls NOT found');
  coverage_reporters.push( { type : 'html', dir : 'coverage', 'subdir' : '.' } );
}


module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
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
      'chai'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: reporters,
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
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
