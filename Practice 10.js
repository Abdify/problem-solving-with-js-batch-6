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

// function primeRange(arr){
//   let primeArray = [];
//   for(let i = 0; i < arr.length; i++){
//     const prime = isPrime(arr[i]);
//     primeArray.push(prime)
//   }
//   return primeArray
// }

console.log(isPrime(7))