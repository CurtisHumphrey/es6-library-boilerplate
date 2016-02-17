/**
 * format is {
 *   browserName: [versions..]
 *   OR
 *   browserName: {
 *     version: [platforms...]
 *   }
 * }
 * for possibilities
 * https://wiki.saucelabs.com/display/DOCS/Platform+Configurator
 */

module.exports = {
  chrome: [
    'current',
  ],
  firefox: [
    'current',
  ],
  MicrosoftEdge: [
    'current',
  ],
  'internet explorer': [
    'current',
  ],
  safari: [
    'current',
    '8.0',
  ],
};
