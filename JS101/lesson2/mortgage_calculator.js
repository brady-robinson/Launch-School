// Mortgage calculator

// START
// Function takes input loam amount, APR, and loan duration
// From APR calculate monthly interest rate
// use the provided formula to calculate monthly payment

function loanCalculator(loanAmount, apr, loanDuration) {
  let monthlyInterestRate = apr / 12;
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  return monthlyPayment
}

let monthlyPayment = loanCalculator(10000, 0.05, 24);
console.log("Monthly Payment: " + monthlyPayment.toFixed(2))