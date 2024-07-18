import { addOrSubtract } from '../src';

describe('calculate', () => {
  describe('addOrSubtract', () => {
    it('should add two numbers', () => {
      expect(addOrSubtract('add', 1, 2)).toBe(3);
    });

    it('should subtract two numbers', () => {
      expect(addOrSubtract('subtract', 1, 2)).toBe(-1);
    });
  });
});
