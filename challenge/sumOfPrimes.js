//Sum of Primes
//Given a positive number, return the sum of all positive primes that are less than or equal to that number.

function sumOfPrimes (n) {
  function isPrime(number){
    if (number < 2) return false;
    if (number === 2) return true;
    for(var i = 2; i < number; i++){
      if (number % i === 0) return false;
    }
    return true;
  }
  var sum = 0;
  for (var i = 2; i <= n; i++){
    if(isPrime(i))  sum += i;
  }
  return sum;
}
