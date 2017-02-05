//Zero Sum
//Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

function zeroSum (numbers) {
  //complexity: O(n)
  var obj = {};
  var result = false;
  numbers.forEach(v => {
    if(v > 0){
      obj[v] = 0;
    }
    if(v === 0){
      if(obj[0] === 0){
        result = true;
      } else{
        obj[0] = 0;
      }
    }
    if(v < 0){
      if (obj[(-v)] === 0){
        result = true;
      }
    }
  });
  return result;
}

