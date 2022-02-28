import * as assert from 'assert'

const nine = 0b1001
const five = 0b101

// AND

assert.equal(nine & five, 1)
assert.equal(9 & 5, 1)

// OR

assert.equal(nine | five, 13)
assert.equal(9 | 5, 13)

// XOR

assert.equal(nine ^ five, 12)
assert.equal(9 ^ 5, 12)

// NOT

assert.equal(~nine, -10)
assert.equal(~five, -6)
assert.equal(~0, -1)
assert.equal(~-0, -1)
assert.equal(~1, -2)
assert.equal(~-1, 0)

// Left shift

assert.equal(nine << 2, 36)
assert.equal(five << 2, 20)

// Right shift

assert.equal(nine >> 1, 4)
assert.equal(nine >> 4, 0)
assert.equal(five >> 1, 2)
assert.equal(five >> 3, 0)

// Zero-fill right shift

assert.equal(-nine >>> 1, 2147483643)
