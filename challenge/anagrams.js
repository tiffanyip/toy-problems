// Link: https://challenge.makerpass.com/c/53a36a8acc2ec8eff80a071d870462e6

// Description:
// Given two strings, return true if one string is an anagram of another.

// Test Cases:
// isAnagram("silent","listen" ) => true
// isAnagram("torchwood", "doctor who") => true
// isAnagram("why?","why not?") => false

// Code:
function isAnagram (a, b) {
  var a = a.replace(/\s+/g, '').split('');
  var b = b.replace(/\s+/g, '').split('');
  var i = 0;
  while(i < b.length){
    if(a.includes(b[i])) {
      a.splice(a.indexOf(b[i]), 1);
      i++;
    } else {
      return false;
    }
  }
  return true;
}
