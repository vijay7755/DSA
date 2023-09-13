// Radix sort is a special sorting algorithm that works on list of numbers
// It never makes comparision between numbers
// It exploits a fact that information about size of number is encoded in the number of digits
// More digits means bigger number
// It creates a list of bucket from 0 to 9
// The last digit is is placed in the respective bucket and then reorder the array list
// by picking up the elements from bucket 0 to 1
// then repeating the process witht the next digit (placing the elements in the respective bucket by check the next digit)
// continue the iteration untill checking all digits from right to left.

/* Radix sort time complexity */
// time complexity: 
//  best: O(nk)
//  Average: O(nk)
//  Worst: O(nk)
// time comlexity explanation:
// n - is the length of the numbers in an array/list
// k - is the maximum digits length of the number [Computer stores number as (log n)]
// to conclude the tie complexity is O(n log n)


// space complexity: 
// O(n + k)

/* Helper Methods */
// getDigit(num, place) - Method to return the digit in num at the given place vlaue
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
// console.log(getDigit(72453, 2));

// digitCount(num) - return the number of digits in num
function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(0));

// mostDigits(nums) - return the number of digits in the largest number in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// console.log(mostDigits([1234, 56, 3094873927]));

/* Radix Sort */
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  console.log("maxDigitCount: ", maxDigitCount)
  
  for(let k=0; k<maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    console.log(nums)
    for(let i=0; i<nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    // console.log("digitBucket: ", digitBuckets)
    nums = [].concat(...digitBuckets)
    // console.log("nums: ", nums)
  }
  return nums
}

console.log(radixSort([23,345,5467,12,2345,9852]))
