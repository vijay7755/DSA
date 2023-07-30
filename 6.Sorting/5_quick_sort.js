// Quick sort also exploits the fact that Array of 0 or 1 are always sorted
// It works by selecting one element (called Pivot) and finds the exact position of that element.
// After placing the pivot element at the appropriate position, quick sort will be implemented on either side of the pivot.

// To implement Quick sort, it is helpful to implement the function responsible for arranging the elements in an Array on either side of the pivot element.
//

function pivotHelper(arr, start = 0, end = arr.length + 1) {
  function swap(ar, a, b) {
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
        swapIndex++
        swap(arr, swapIndex, i);
    }
    swap(arr, start, swapIndex)
  }

  return arr
}

console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]))
