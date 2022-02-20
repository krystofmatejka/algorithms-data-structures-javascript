import {swap} from '../lib/index.js';

export const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j)
      }
    }
  }

  return array
}
