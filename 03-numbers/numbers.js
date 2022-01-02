export function isPrime(n) {
  if (n <= 1) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n%i === 0) {
      return false
    }
  }

  return true
}

/**
 * The loop only has to test until the square root of n.
 * Because if the square root of n is not a prime number, n is not a prime number.
 */
export function isPrime2(n) {
  if (n <= 1) {
    return false
  }

  if (n <= 3) {
    return true
  }

  if (n%2 === 0 || n%3 === 0) {
    return false
  }

  for (let i = 5; i <= Math.sqrt(n); i++) {
    if (n%i === 0) {
      return false
    }
  }

  return true
}

/**
 * All prime numbers > 3 are nearly divisible by 6
 *
 * 5 = 1*6-1
 * 7 = 1*6+1
 * 11 = 2*6-1
 * 13 = 2*6+1
 * 17 = 3*6-1
 * 19 = 3*6+1
 * 23 = 4*6-1
 * 29 = 5*6-1
 * 31 = 5*6+1
 * 37 = 6*6+1
 * 41 = 7*6-1
 * 43 = 7*6+1
 * 47 = 8*6-1
 * 53 = 9*6-1
 * 61 = 10*6+1
 * 751 = 125*6+1
 *
 * https://www.youtube.com/watch?v=5CUvf675-6o
 * https://en.wikipedia.org/wiki/Primality_test
 */
export function isPrime3(n) {
  if (n <= 1) {
    return false
  }

  if (n <= 3) {
    return true
  }

  if (n%2 === 0 || n%3 === 0) {
    return false
  }

  for (let i = 5; i*i <= n; i = i+6 ) {
    if (n%i === 0 || n%(i+2) === 0) {
      return false
    }
  }

  return true
}


export function primeFactors(n)  {
  const result = []
  while (n%2 === 0) {
    result.push(2)
    n = n / 2
  }

  for (let i = 3; i*i <= n; i = i+2) {
    while (n%i === 0) {
      result.push(i)
      n = n / i
    }
  }

  if (n > 2) {
    result.push(n)
  }

  return result
}

