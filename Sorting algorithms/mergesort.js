/*
 * Data structures
 * All about sorting algorithms
 * 1. Merge Sort
 * 2. Merge Routine
*/

/*
 * Merge Sort Routine - takes two sorted list and merges them into one sorted list
 * [3, 4, 5, 8], [1, 2, 6, 7] - two sorted list arrays
 * [1, 2, 3, 4, 5, 6, 7, 8] - merges two sorted list arrays into one
*/

/*
 * Merge Sort Routine
 * [8, 4, 1, 6, 3, 5, 2, 7] slit into two list arrays
 * [8, 4, 1, 6], [3, 5, 2, 7] sort each array
 * [1, 4, 6, 8], [2, 3, 5, 7] merge two sorted lists
 * [1, 2, 3, 4, 5, 6, 7, 8]
*/

/*
 * Merge Sort Routine
 * [8, 4, 1, 6, 3, 5, 2, 7] slit into two list arrays
 * [8, 4], [1, 6], [3, 5], [2, 7]
 * [4, 8], [1, 6], [3, 5], [2, 7]
 * [4], [8], [1], [6], [3], [5], [2], [7]
 * [1, 2, 3, 4, 5, 6, 7, 8]
*/

/*
 * Merge Sort Routine
 * [4], [8], [1], [6], [3], [5], [2], [7]
 * [4, 8], [1, 6], [3, 5], [2, 7]
 * [4, 8, 1, 6], [3, 5, 2, 7]
 * [1, 2, 3, 4, 5, 6, 7, 8]
*/

function mergeSortRecursive (array) {
  // base case
  if (array.length <= 1) return array;

  // divide and conquer!!
  let leftHalf = array.slice(0, array.length/2);
  let rightHalf = array.slice(array.length/2);
  let leftSorted = mergeSortRecursive(leftHalf);
  let rightSorted = mergeSortRecursive(rightHalf);

  // merge subarrays
  return merge(leftSorted, rightSorted);
};

function mergeSortIterative (array) {
  // create array of subarrays with each element
  let splitArr = array.map(function(element) { return [element]; });

  // while there is more than one subarray
  while (splitArr.length > 1) {
    let result = [];
    // merge adjacent
    for (let i=0; i<splitArr.length; i+=2) {
      // for pairs merge
      if (splitArr[i+1]) result.push(merge(splitArr[i], splitArr[i+1]));
      // for last odd element, just add to results
      else result.push(splitArr[i]);
    }
    // overwrite old splitArr
    splitArr = result;
  }
  return splitArr[0];

};

function merge(left, right) {
  let result = [];
  let iLeft = 0;
  let iRight = 0;

  // while result is not fully populated
  while (result.length < (left.length + right.length)) {
    // if all elements in left have been added, then add remaining right elements
    if (iLeft === left.length) result = result.concat(right.slice(iRight));
    // if all elements in right have been added, then add remaining left elements
    else if (iRight === right.length) result = result.concat(left.slice(iLeft));
    // compare elements in subarrays and add lower of the two to result
    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
    else result.push(right[iRight++]);
  }
  return result;
}

mergeSortRecursive([9, 4, 7, 1, 3, 5, 2]);
/*
 * [9, 4, 7, 1, 3, 5, 2]
 * L[9, 4, 7], R[1, 3, 5, 2]
 * L[9], R[4, 7], L[1, 3], R[5, 2]
 * L[9], L[4], R[7], L[1], R[3], L[5], R[2]
 * [1, 2, 3, 4, 5, 7, 9]
*/

mergeSortIterative([9, 4, 7, 1, 3, 5, 2]);
/*
 * [9], [4], [7], [1], [3], [5], [2]
 * [9, 4], [7, 1], [3, 5], [2]
 * [1, 4, 7, 9], [2, 3, 5]
 * [1, 2, 3, 4, 5, 7, 9]
*/