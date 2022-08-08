// Calculate Electricity bill
// For first 100 unit - 5 tk per unit
// For more than 100 unit 6 tk for every unit more than 100
// For more than 200 unit 7 tk for every unit more than 200

// 250 unit
// 100 * 5 = 500
// (200 - 100) * 6
// (250 - 200) * 7


function electricityBill(unit){
  let bill;
  if(unit <= 100){
    bill = unit * 5;
  } else if(unit <= 200){
    // 130
    // 100 => 500
    // 30 * 6 = 180
    const first100 = 100*5;
    const remaining = unit - 100;
    const remainingCost = remaining * 6;
    bill = first100 + remainingCost;
  } else if(unit > 200){
    //unit 230
    const first100 = 100 * 5;

    const second100 = 100 * 6;

    const remaining = unit - 200;

    const remainingBill = remaining * 7;

    bill = first100 + second100 + remainingBill;
  }

  return bill;
}


const totalBill = electricityBill(250)
console.log(totalBill)