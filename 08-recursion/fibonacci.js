export function getFibNumIter(n) {
  let sum = 1
  let last = 1
  let previous = 0

  for (let i = 1; i < n; i++) {
    sum = last + previous
    previous = last
    last = sum
  }

  return sum
}

export function getFibSeqIter(n) {
  const sequence = []

  for (let i = 0; i < n; i++) {
    const last = sequence[sequence.length - 1] ?? 1
    const previous = sequence[sequence.length - 2] ?? 0
    sequence.push(last + previous)
  }

  return sequence
}


/**
  f(6)
    -> f(5)
      -> f(4)
        -> f(3)
         -> f(2)
           -> f(1)
           -> f(0)
         -> f(1)
        -> f(2)
         -> f(1)
         -> f(0)
      -> f(3)
        -> f(2)
         -> f(1)
         -> f(0)
        -> f(1)
    -> f(4)
      -> f(3)
       -> f(2)
         -> f(1)
         -> f(0)
       -> f(1)
      -> f(2)
       -> f(1)
       -> f(0)
 */
export function getFibNumRecursive(n) {
  return (n <= 1)
    ? n
    : getFibNumRecursive(n - 1) + getFibNumRecursive(n - 2)
}

/**
  f(6)
  f(5)
  f(4)
  f(3)
  f(2)
  f(1)
*/
export function getFibNumRecursiveOptimal(n) {
  function f(n, previous, last) {
    switch (true) {
      case (n === 0): return previous
      case (n === 1): return last
      default: return f(n - 1, last, previous + last)
    }
  }

  return f(n, 0, 1)
}
