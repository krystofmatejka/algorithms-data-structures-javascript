export const getFibNumIter = (n) => {
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

export const getFibSeqIter = (n) => {
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
export const getFibNumRecursive = (n) => (n <= 1)
  ? n
  : getFibNumRecursive(n - 1) + getFibNumRecursive(n - 2)

/**
  f(6)
    -> n=6, previous=0, last=1
  f(5)
    -> n=5, previous=1, last=2
  f(4)
    -> n=4, previous=2, last=3
  f(3)
    -> n=3, previous=3, last=5
  f(2)
    -> n=2, previous=5, last=8
  f(1)
    -> return last
*/
export const getFibNumRecursiveOptimal = (n) => {
  const f = (n, previous, last) => (n <= 1)
    ? last
    : f(n - 1, last, previous + last)

  return f(n, 0, 1)
}
