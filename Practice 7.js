// Find if anybody got A+ from your friends
// marks = [78, 82, 69];


function checkGPA(arr){
  for(let i = 0; i < arr.length; i++){
    // console.log("friend "+ i + "th mark: "+ arr[i]);
    if(arr[i] >= 80){
      return true;
    }
  }

  return false;

}

console.log(checkGPA([78,82, 69]));
