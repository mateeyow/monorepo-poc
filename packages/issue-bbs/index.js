import { add } from '@mateeyow/core'

export function issueBBS() {
  console.log('issue-bbs');
  console.log('do something else')
  return add(1, 2);
}

const solution = issueBBS()
console.log('solution', solution);