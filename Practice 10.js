// Check if a number is Prime

// 1 n 11
// 2 -> n-1

function isPrime(number){

  for(let i = 2; i < number; i++){
    if(number % i == 0){
      return false;
    }
  }

  return true;

}

console.log(isPrime(7))