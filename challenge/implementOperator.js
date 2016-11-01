//Implement Operators
//Write three functions to replace the multiply, divide, and modulo operators. The only operators you may only use in your solution are addition and subtraction. Your functions will only have to handle integer math.

// TEST CASES:
// multiply(5, 2) === 10
// divide(5, 2) === 2
// modulo(5, 2) === 1

var multiply = function(x, y) {
  var neg = false;
  if(x < 0) {
    x = -x;
    neg = !neg;
  }
  if(y < 0) {
    y = -y;
    neg = !neg;
  }
  var result = 0;
  while(x > 0){
    result+=y;
    x--;
  }
  return neg ? -result : result;
};

var divide = function(x, y) {
  var neg = false;
  if(x < 0 && y < 0) {
    neg = true;
    x = -x;
    y = -y;
  }
  if(y === 0) return 'NaN';
  if(x === 0 || x < y) return 0;

  var count = 0;
  while(x >= 0) {
    x -= y;
    count++;
  }
  return neg? -(count-1) : count-1;
};

var modulo = function(x, y) {
  if(y === 0) return 'NaN';
  return x - multiply(y,divide(x,y));
};
