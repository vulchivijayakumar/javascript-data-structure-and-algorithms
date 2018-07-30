/*
 * Data Structures
 * All about bubble sorting.
 * 1. Bubble Sort
*/

/*
 * original: 15, 29, 3, 12
 * step 0: 15, 29, 3, 12
 * step 1: 15, 3, 29, 12 - swap 29, 3
 * step 2: 15, 3, 12, 29 - swap 29, 12
 * step 3: 3, 15, 12, 29 - swap 15, 3
 * step 4: 3, 12, 15, 29 - swap 15, 12
 * resule: 3, 12, 15, 29 
*/

/*
 * [9, 6, 8, 2, 5, 1]
 * [6, 9, 8, 2, 5, 1]
 * [6, 8, 9, 2, 5, 1]
 * [6, 8, 2, 9, 5, 1]
 * [6, 8, 2, 5, 9, 1]
 * [6, 8, 2, 5, 1, 9]
 * [6, 2, 8, 5, 1, 9]
 * [6, 2, 5, 8, 1, 9]
 * [6, 2, 5, 1, 8, 9]
 * [2, 6, 5, 1, 8, 9]
 * [2, 5, 6, 1, 8, 9]
 * [2, 5, 1, 6, 8, 9]
 * [2, 1, 5, 6, 8, 9]
 * [1, 2, 5, 6, 8, 9]
*/

let bubbleSort = function (arr) {
  let strLength = arr.length;
  while (strLength >= 0) {
    for (let i=0; i<strLength; i++) {
      if (arr[i] > arr[i+1]) {
        arr = swap(arr, i, i+1);
      }
    }
    strLength--;
  }
  return arr;
};

function swap (arr, ele1, ele2) {
  /*
   * only works for integers
  */
  arr[ele1] = arr[ele1] + arr[ele2];
  arr[ele2] = arr[ele1] - arr[ele2];
  arr[ele1] = arr[ele1] - arr[ele2];
  return arr;
}

bubbleSort([3,5,1]);