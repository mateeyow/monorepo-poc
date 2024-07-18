import { subtractNumbers } from '../src';

describe('subtract', () => {
  describe('subtractNumbers', () => {
    it('should subtract two numbers', () => {
      expect(subtractNumbers(1, 2)).toBe(-1);
    });
  });
});
