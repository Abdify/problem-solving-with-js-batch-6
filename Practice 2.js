// Count numbers divisible by 3 from 1 - 20;

function divisibleBy3(){
  let count = 0;
  for(let i = 1; i<= 20; i++){
    if(i % 3 === 0){
      count = count + 1;
      // count = count + 1;
      // count++;
      // count += 1;
    }
  }
  return count;
}



const ans = divisibleBy3();

console.log(ans)

