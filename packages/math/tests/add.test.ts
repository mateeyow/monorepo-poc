import { addNumbers } from '../src';

describe('add', () => {
  describe('addNumbers', () => {
    it('should add two numbers', () => {
      expect(addNumbers(1, 2)).toBe(3);
    });
  });
});
