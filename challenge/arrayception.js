// Link: https://challenge.makerpass.com/c/83c0ae2e83f9e5d8950b4c364fb59378

// Description:
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Test Cases:
// arrayception([ [ 5 ], [ [ ] ] ]  ) => 2
// arrayception([ 10, 20, 30, 40 ]  ) => 1
// arrayception([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]  ) => 4
// arrayception([ ] ) => 0
// arrayception([ [ [ ] ] ] ) => 0

// Code:
function arrayception (array) {
  var maxDepth = 0;

  function recurse(arr, depth){
    arr.forEach(elem => {
      if (Array.isArray(elem) && elem.length > 0){
        recurse(elem, depth+1);
      } else if(!Array.isArray(elem)) {
        maxDepth = Math.max(depth+1, maxDepth);
      }
    });
  }
  recurse(array, 0);
  return maxDepth;
}
