// Calculate the average of all the numbers that is divisible by 3 from 1 - n;

//(1 + 2 + 3 + 4 + 5) / 5


// 3  + 6 + 9
function average(n){
  let count = 0, sum = 0;
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0){
      count = count + 1;
      sum = sum + i;
    } 
  }

  const avg = sum / count;
  return avg;
}


const result = average(10);
console.log(result)
