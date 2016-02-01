/* eslint no-magic-numbers: 0 */ // simple math checks
import Calculator from './Calculator';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    const sum = calculator.add(5, 2);
    expect(sum).to.be.eql(7);
  });

  it('should substract two numbers', () => {
    const calculator = new Calculator();
    const sub = calculator.sub(5, 2);
    expect(sub).to.be.eql(3);
  });
});
