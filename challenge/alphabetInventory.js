// Link: https://challenge.makerpass.com/c/1a3561fb38b3d79dcb48c60ae7b3ea76

// Description:
// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

// Test Cases:
// alphaCount("aBc", "aabbccdd" ) => "a:2,b:2,c:2"
// alphaCount("x", "Racer X is my friend :)" ) => "a:2,b:2,c:2"
// alphaCount("123", "o hai"   ) => "no matches"


// Code:
function alphaCount (alphabet, text) {
  alphabet = alphabet.toLowerCase();
  text = text.toLowerCase();
  var result = alphabet.split("").map(elem => [elem,0] );
  var letters = alphabet.split("");
  
  text.split('').forEach(letter => {
    if(letters.indexOf(letter) >= 0) {
      result[letters.indexOf(letter)][1]++;
    }
  });
  result = result.filter(elem => {
    return elem[1] > 0;
  })
  
  if(result.length === 0)
    return "no matches";
  return result.map(elem => elem.join(':')).join(',');
}
