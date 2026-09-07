import { formatCurrency } from '../utils/money.js';

// tests
console.log("test suite: fromatCurrency");
//case 1
console.log("Convert Cents into Dollars");
if(formatCurrency(2095) === '20.95' ){
    console.log("Passed");
}else{
    console.log("Failed");
}
// case 2
console.log("Working with zero 0");
if(formatCurrency(0) === '0.00' ){
    console.log("Passed");
}else{
    console.log("Failed");
}
// case 3
console.log("Round up the nearset cents");
if(formatCurrency(2000.5) === '20.01' ){
    console.log("Passed");
}else{
    console.log("Failed");
}
