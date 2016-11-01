// Link: https://challenge.makerpass.com/c/ff27e2e8c35ec8a7bd068cd0430a0428

// Description:
// Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values.

// Test Cases:
// isSubset([ 1, 2, 3, 4 ], [ 2, 3, 4 ]) => true
// isSubset([ 2, 2, 2, 3, 4 ], [ 2, 4, 3 ]) => true
// isSubset([ 2, 3, 3, "a" ], [ 3, 3, 3, "a" ]) => false

// Code:
function isSubset (array, sub) {
  var i = 0;
  while(i < sub.length) {
    if(array.indexOf(sub[i]) < 0){
      return false;
    } 
    array.splice(array.indexOf(sub[i]), 1);
    i++;
  }
  return true;
}
