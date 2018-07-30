/*
 * Data Structures
 * All about bubble sorting.
 * 1. Selection Sort
*/

/*
 * Selects the highest element in an array and pushes it into a new array
 * Way 1:
 * original array [4, 8, 3, 1]
 * [4, 8, 3, 1] find highest one. swap highest number and array last element
 * [4, 1, 3, 8] find next highest one. swap highest number with array last element - 1
 * [3, 1, 4, 8] find next hightest one. swap highest number width array last elemet - 2
 * [1, 3, 4, 8] result array
 *
*/

/*
 * Selects the smallest element in an array and pushes it into a new array
 * Way 2: without creating new array
 * original array [4, 6, 9, 3, 1, 5]
 * [4, 6, 9, 3, 1, 5] - find smallest one and replace it in array[0]
 * [1, 6, 9, 3, 4, 5] - find next smallest one and replace it in array[1]
 * [1, 3, 9, 6, 4, 5] - find next smallest one and replace it in array[2]
 * [1, 3, 4, 6, 9, 5] - find next smallest one and replace it in array[3]
 * [1, 3, 4, 5, 9, 6] - find next smallest one and replace it in array[4]
 * [1, 3, 4, 5, 6, 9] - result
*/

// finding smallest one

var selectionSort = function (array, comparator) {
  comparator = comparator || defaultComparator;
  array.forEach(function(element, index) {
    var minValue = element;
    var minIndex = index;
    for (var i = index; i<array.length; i++) {
      if (comparator(array[i], minValue) < 0)
        {
          minValue = array[i];
          minIndex = i;
        }
    }
    // swap values at min index and current position
    array = swap(array, index, minIndex);
  });
  return array;
};

function swap (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function defaultComparator(a,b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
};

selectionSort([4, 6, 9, 3, 1, 5]);

// try highest one
