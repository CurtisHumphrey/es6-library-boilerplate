import browsers_to_saucelabs from '../tools/browsers_to_saucelabs';

describe('browsers_to_saucelabs', () => {
  let launchers;
  let browsers;

  describe('given browser entries without platforms', () => {
    beforeEach(() => {
      browsers = {
        firefox: [
          'dev',
          'beta',
          'current',
          '3.6',
        ],
      };
      launchers = browsers_to_saucelabs(browsers);
    });

    it('should return an object with the base key set to SauceLabs', () => {
      const first = Object.keys(launchers)[0];

      expect(launchers[first]).to.include.keys('base');
      expect(launchers[first].base).to.eql('SauceLabs');
    });
    it('should generate a key for each version', () => {
      const entries = Object.keys(launchers);

      expect(entries).to.have.length(browsers.firefox.length);
    });
    it('should generate a key set to that browser', () => {
      const first = Object.keys(launchers)[0];

      expect(launchers[first]).to.include.keys('browserName');
      expect(launchers[first].browserName).to.eql('firefox');
    });
  });
  describe('given browser entries with a version "current"', () => {
    beforeEach(() => {
      browsers = {
        firefox: [
          'current',
        ],
      };
      launchers = browsers_to_saucelabs(browsers);
    });

    it('should return an object without a version key', () => {
      const first = Object.keys(launchers)[0];

      expect(launchers[first].version).to.not.exist;
    });
  });

  it('given a browser entry with platforms it should generate objects with platform keys', () => {
    browsers = {
      firefox: {
        dev: ['Windows 7', 'OS X 10.11'],
      },
    };
    launchers = browsers_to_saucelabs(browsers);

    const first = Object.keys(launchers)[0];

    expect(launchers[first]).to.include.keys('platform');
    expect(launchers[first].platform).to.eql('Windows 7');
  });
});
