import { add, log } from '@mateeyow/core'

export function issueECDSA() {
  log('issue-ECDSA');
  log('do something else')
  return add(1, 2);
}

const solution = issueECDSA()

export function issueECDSA2() {
  log('issue-ECDSA2');
  log('do something else')
  return add(1, 2);
}
