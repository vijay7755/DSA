// Quick sort also exploits the fact that Array of 0 or 1 are always sorted
// It works by selecting one element (called Pivot) and finds the exact position of that element.
// After placing the pivot element at the appropriate position, quick sort will be implemented on either side of the pivot.

// To implement Quick sort, it is helpful to implement the function responsible for arranging the elements in an Array on either side of the pivot element.
/* Pivot Helper Function */
// This function will pick the pivot value and arrange the lesser value to the left side of the pivot and
// greater value to the right side of the pivot.
/* Pseudocode */
// The function will accept an array, start value and an end value (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array (Optional)
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from start to end.
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// After loop swap the starting the index(i.e Pivot element) with the pivot index.
// Return the pivot index.

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  function swap(ar, a, b) {
    console.log(`ar: ${ar}\nswapIndex: ${a}\ni: ${b}`)
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  console.log(arr);
  return swapIndex;
}

// console.log(pivotHelper([4, 3, 8, 2, 1, 5, 7, 6]));


/* Quick Sort Implementation */
// finding the pivot index at the given array and arranging the left and right vlaues.
// Invoking the quickSort function recursively to sort the left side elements and then
// to sort the right side elements with the base case as left < right
// finally return the sorted array

// time complexity: 
//  best: O(n log n)
//  Average: O(n log n)
//  Worst: O(n^2)
// time comlexity explanation:
// O(log n) [logerthemic] - decomposition
// As the n grows the splitting of array grows log^2 n
// example: if n = 8 then decomposition = 3, if n = 32 then decomposition = 5
// O(n) [linear] - comparisons per decomposition
// iterate each item in both decomposed arrays to compare and merge
// so, O(log n) + O(n) = O(n log n) - linear logethemic

// space complexity: 
// O(n)

function quickSort(arry, left=0, right=arry.length-1) {
  console.log("arry: ", arry)

  if(left < right) {
    let pivotIndex = pivotHelper(arry, left, right)
    console.log("pivotIndex: ", pivotIndex);
    console.log("arry after pivot: ", arry)
    quickSort(arry, left, pivotIndex-1);

    quickSort(arry, pivotIndex+1, right);
  }

  return arry
}

console.log(quickSort([4, 6, 9, 1, 2, 5]))