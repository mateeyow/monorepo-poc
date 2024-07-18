import { addNumbers, subtractNumbers } from '@mateeyow/math';

export function addOrSubtract(
  type: 'add' | 'subtract',
  n1: number,
  n2: number,
) {
  if (type === 'add') {
    return addNumbers(n1, n2);
  }

  return subtractNumbers(n1, n2);
}
