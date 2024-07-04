import { test, assert } from 'node:test'
import { add } from '.'

test('add', (t) => {
  assert.strictEqual(add(1, 2), 3)
})