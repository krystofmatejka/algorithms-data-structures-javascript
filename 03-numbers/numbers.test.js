import {isPrime, isPrime2, isPrime3, primeFactors} from './numbers.js';

const PRIME_NUMBER_TEST_CASE = [
  [0, false],
  [1, false],
  [2, true],
  [3, true],
  [4, false],
  [5, true],
  [6, false],
  [7, true],
  [8, false],
  [9, false],
  [10, false],
  [113, true],
  [151, true],
  [152, false],
  [749, false],
  [751, true],
  [1001, false],
]

test.each(PRIME_NUMBER_TEST_CASE)(`1. check if number %s is prime`, (n, e) => expect(isPrime(n)).toBe(e))
test.each(PRIME_NUMBER_TEST_CASE)(`2. check if number %s is prime`, (n, e) => expect(isPrime2(n)).toBe(e))
test.each(PRIME_NUMBER_TEST_CASE)(`3. check if number %s is prime`, (n, e) => expect(isPrime3(n)).toBe(e))

const PRIME_FACTOR_TEST_CASE = [
  [900, [2,2,3,3,5,5]],
  [11, [11]],
  [100, [2,2,5,5]],
]
test.each(PRIME_FACTOR_TEST_CASE)('prime factors', (n, e) => expect(primeFactors(n)).toEqual(e))
