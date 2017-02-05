//Shallow Flatten
//Given an array of arrays, return all elements in a single array. Nested arrays will be at most one level deep, meaning 


function flatten (array) {
  var result = [];
  //recursion , takes elem as input
  var recursion = elem => {
    if(Array.isArray(elem)){
      elem.forEach(v => recursion(v));
    } else {
      result.push(elem)
    }
  }
  recursion(array);
  return result;
}
