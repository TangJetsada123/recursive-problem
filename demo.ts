let amount = 560000;
let taxRate = [150001, 300001, 500001, 750001, 1000001, 2000001, 5000001];

function findStepTax(x) {
  let sum = 0;
  let total = 0;
  for (x of taxRate) {
    if (amount >= 5000001) {
    sum = amount - 5000000;
    total = sum * 0.35 + 1265000;
  } else if (amount >= 2000001) {
    sum = amount - 2000000;
    total = sum * 0.3 + 365000;
  } else if (amount >= 1000001) {
    sum = amount - 1000000;
    total = sum * 0.25 + 115000;
  } else if (amount >= 750001) {
    sum = amount - 750000;
    total = sum * 0.2 + 650000;
  } else if (amount >= 500001) {
    sum = amount - 500000;
    total = sum * 0.15 + 27500;
  } else if (amount >= 300001) {
    sum = amount - 300000;
    total = sum * 0.1 + 7500;
  } else {
    total = 0;
  }

  }
  
  let cal = taxRate.reduce(function (prev,cur){
    return prev + cur
  })

console.log(cal);

}

findStepTax(amount);
