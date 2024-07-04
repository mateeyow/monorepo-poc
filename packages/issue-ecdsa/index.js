import { add } from '@mateeyow/core'

export function issueECDSA() {
  console.log('issue-ECDSA');
  console.log('do something else')
  return add(1, 2);
}

const solution = issueECDSA()
console.log('solution', solution);