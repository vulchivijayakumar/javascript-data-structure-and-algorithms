/*
 * Data Structures
 * All about bubble sorting.
 * 1. Insertion Sort
*/

/*
 * Selects the first element in an array and pushes it into a new array. As
 * each new element is added , insert the new element in the correct order
 * Way 1: without creating new array
 * [9, 6, 8, 2, 5, 1] - original array
 * [9, 6, 8, 2, 5, 1] - swap 9, 6
 * [6, 9, 8, 2, 5, 1] - swap 9, 8
 * [6, 8, 9, 2, 5, 1] - swap 2, 9
 * [6, 8, 2, 9, 5, 1] - swap 8, 2
 * [6, 2, 8, 9, 5, 1] - swap 6, 2
 * [2, 6, 8, 9, 5, 1]
 * [2, 6, 8, 5, 9, 1]
 * [2, 6, 5, 8, 9, 1]
 * [2, 5, 6, 8, 9, 1]
 * [2, 5, 6, 8, 1, 9]
 * [2, 5, 6, 1, 8, 9]
 * [2, 5, 1, 6, 8, 9]
 * [2, 1, 5, 6, 8, 9]
 * [1, 2, 5, 6, 8, 9] - result array
*/

var insertionSort = function(array, comparator) {
  comparator = comparator || defaultComparator;

  // start at index 1 as sublist of array[0] is already sorted
  for (var index=1; index<array.length; index++) {
    var value = array[index];
    var compareIndex = index-1;
    // swap with left element while < value
    while (compareIndex > -1 && comparator(array[compareIndex], value) > 0) {
      array = swap(array, compareIndex, index);
      index = compareIndex;
      compareIndex--;
    }
  }
  return array;
};

function defaultComparator(a,b) {
  if (a < b) return -1; // a comes first
  else if (a > b) return 1; // b comes first
  return 0;
};

function swap (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

insertionSort([9, 6, 8, 2, 5, 1]);