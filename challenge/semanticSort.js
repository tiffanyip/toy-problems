//Semantic Sort
//  A "semantic version" is a string of format x.y.z, where x is the major version number, y is the minor version number, 
//  and z is the patch version number. Given a newline-separated string with these version numbers, return a newline-separated string 
//  with the versions sorted from highest to lowest. When sorting, x takes priority over y, and y takes priority over z.

function semSort (versionsString) {
  const versionsArr = versionsString.split('\n');
  // for each version string, split them by "."
  versionsArr.forEach((ver, i, arr) => {
    arr[i] = ver.split('.');
  });
  // sort by size of x, then y, then z, highest to lowest
  versionsArr.sort((x, y) => {
    if(parseInt(x[0]) > parseInt(y[0])){
      return -1;
    }
    else if (x[0] === y[0] && parseInt(x[1]) > parseInt(y[1])){
      return -1;
    }
    else if (x[0] === y[0] && x[1] === y[1] && parseInt(x[2]) > parseInt(y[2])){
      return -1;
    }
    else if (x[0]===y[0] && x[1] === y[1] && x[2] === y[2]){
      return 0;
    } else {
      return 1;
    }
  });
  
  versionsArr.forEach((ver, i ,arr) =>{
    arr[i] = ver.join('.');
  });
  return versionsArr.join('\n');

}
