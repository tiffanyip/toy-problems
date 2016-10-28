// Link: https://challenge.makerpass.com/c/df608f8fbcc905b9e6628090028ee02a

// Description:
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// Test Cases:
// allAnagrams("abc") => [ "abc", "acb", "bac", "bca", "cab", "cba" ]

// Code:
function allAnagrams (string) {
  var result = [];
  var str = string.split('');
  
  function recurse(built, arr){
    if (built.length === str.length){
      if(result.indexOf(built) === -1)
        result.push(built);
    } else {
      for(var i = 0; i < arr.length; i++){
       var temp = arr.slice();
       temp.splice(i,1)
       recurse(built+arr[i], temp);
      }
    }
  }
  recurse('', str);
  return result;
}
