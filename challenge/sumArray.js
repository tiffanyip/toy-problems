// Link: https://challenge.makerpass.com/c/40709f0c286eacc3cea3db151e44e0cb

// Description:
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Test Cases:
// sumArray([ 1, 2, 3 ] ) => 6
// sumArray([ 4, -1, 5 ]  ) => 8
// sumArray([ 10, -11, 11 ] ) => 11
// sumArray([ 1, 2, 3, -6, 4, 5, 6 ]  ) => 15

// Code:
function sumArray (array) {
    var contiguous_sum = array[0];
    var max = array[0];
    for (var i = 1; i < array.length; i++){
      contiguous_sum = Math.max(array[i], contiguous_sum + array[i]);
      max = Math.max(max, contiguous_sum);
    }
    return max;
}
