import assert from 'assert';
import calc from './Calculator';
import saucelab_browsers from '../saucelab_browsers';
import browsers_to_saucelabs from '../tools/browsers_to_saucelabs';

describe('(Framework)', () => {
  describe('Karma Plugins', () => {
    it('Should expose "expect" globally.', () => {
      assert.ok(expect);
    });

    it('Should expose "should" globally.', () => {
      assert.ok(should);
    });

    it('Should expose "sinon" globally.', () => {
      assert.ok(sinon);
    });

    it('Should expose a "__Rewire__" function on every import', () => {
      assert.ok(calc.__Rewire__);
    });

    it('Should have chai-as-promised helpers.', () => {
      const pass = new Promise((resolve) => resolve('test'));
      const fail = new Promise((resolve, reject) => reject());

      return Promise.all([
        expect(pass).to.be.fulfilled,
        expect(fail).to.not.be.fulfilled,
      ]);
    });
  });
  describe('saucelab_browsers file', () => {
    it('Should have at least one test case', () => {
      expect(Object.keys(saucelab_browsers)).to.have.length.above(0);
      const saucelabs = browsers_to_saucelabs(saucelab_browsers);
      expect(Object.keys(saucelabs)).to.have.length.above(0);
    });
  });
});
