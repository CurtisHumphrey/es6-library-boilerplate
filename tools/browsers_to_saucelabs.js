// inspired by https://gist.github.com/riggerthegeek/8e28e9fea81835fad6bf#file-saucelabs_browsers-js

function browsers_to_saucelabs(browsers) {
  var keys = Object.keys(browsers);
  browsers = keys.map(function(browserName) {
    return {
      browserName: browserName,
      versions: browsers[browserName],
    };
  });

  return browsers.reduce( function(launchers, current) {
    var browserName = current.browserName;
    current = current.versions;
    if (current.length !== undefined) {
      // make into standard object
      current = current.reduce( function(result, version) {
        result[version] = [null]; // no platform specified
        return result;
      }, {});
    }
    var versions = Object.keys(current);

    versions.forEach( function(version) {
      var platforms = current[version];
      platforms.forEach( function(plat) {
        var name = ['SL', browserName, version];
        if (plat !== null) name.push(plat);

        name = name.join("_").replace(/\s/g, "_");

        launchers[name] = {
          base: 'SauceLabs',
          browserName: browserName,
          version: version === 'current' ? undefined : version,
          platform: plat || null,
        };
      });
    });

    return launchers;
  }, {});
}

module.exports = browsers_to_saucelabs;
