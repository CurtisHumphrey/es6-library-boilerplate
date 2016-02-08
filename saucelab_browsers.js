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

module.export = {
  chrome: [
    'current',
  ],
  firefox: [
    'dev',
    'beta',
    'current',
    '3.6',
  ],
};
