import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: fromatCurrency', () => {
    // case1 :if(formatCurrency(2095)==='20.95'){console.log("Passed");}else{console.log("Failed");}
    it('Convert Cents into Dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    // case 2 : console.log("Working with zero 0");if(formatCurrency(0) === '0.00' ){console.log("Passed");}else{console.log("Failed");
    it('Working with zero 0', () =>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    // case 3 : console.log("Round up the nearset cents");if(formatCurrency(2000.5) === '20.01' ){console.log("Passed");}else{console.log("Failed");}
    it('Round up the nearset cents', () =>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
}); 