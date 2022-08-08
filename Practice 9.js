// Remove duplicate from array

function removeDuplicate(arr){
  let unique = [];

  for(let i = 0; i < arr.length; i++){
    if(unique.includes(arr[i]) == false){
      unique.push(arr[i]);
    }
  }
  return unique;

}

console.log(removeDuplicate([1,2,3,2, 4]))