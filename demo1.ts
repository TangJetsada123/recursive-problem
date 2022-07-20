function calDeposit(deposit, year) {
  let sum = 0;
  sum += 1.05 ** year * deposit;
  year--;
  if (year > 0) {
    return(Math.round(sum * 100) / 100);
  } else {
    calDeposit(sum, year);
  }
}

function calculateOil(amount, currYear, incomYear) {
  let sum = 0;
  sum += amount * 0.9;
  currYear++;
  if (currYear == incomYear) {
    return(Math.round(sum * 100) / 100);
  } else {
    calculateOil(sum, currYear, incomYear);
  }
}

function calFibo(n) {
  let sum = 0;
  if (n == 0) {
    sum += 0;
    return sum;
  }
  if (n == 1) {
    sum += 1;
    return sum;
  }
  if (n > 1) {
    return calFibo(n - 1) + calFibo(n - 2);
  }
}

let m = 1;
let s = 0;
function SumNumberCycle(n) {
    if (m <= n) {
    s = s + m;
    m++;
    return SumNumberCycle(n);
  } else {
    return s
  }
}

console.log(calDeposit(10000, 30));
console.log(calculateOil(25000000, 2557, 2558));
console.log(calFibo(5));
console.log(SumNumberCycle(5));
