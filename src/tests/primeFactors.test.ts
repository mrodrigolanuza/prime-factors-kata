/*
- 2 ⇒ [2]
- 4 = 2 * 2 ⇒ [2,2]
- 8 = 2 * 2 * 2 ⇒ [2,2,2]
- 3 ⇒ [3]
- 9 = 3 * 3 ⇒ [3,3]
- 6 = 3 * 2 ⇒ [2,3]
- 25 = 5 * 5 ⇒ [5,5]
- 1155 = 5 * 7 * 11 * 3 ⇒ [3,5,7,11]
*/

import { getPrimeFactorOfNumber } from "../core/primeFactors";

describe("The Prime Factorizer", ()=>{
    it("returns one when number is one",()=>{
        expect(getPrimeFactorOfNumber(1)).toEqual([1]);
    });
    it("returns the same prime number",()=>{
        expect(getPrimeFactorOfNumber(2)).toEqual([2]);
        expect(getPrimeFactorOfNumber(3)).toEqual([3]);
        expect(getPrimeFactorOfNumber(5)).toEqual([5]);
        expect(getPrimeFactorOfNumber(11)).toEqual([11]);
    });
    it("returns the same prime number several times",()=>{
        expect(getPrimeFactorOfNumber(4)).toEqual([2,2]);
        expect(getPrimeFactorOfNumber(8)).toEqual([2,2,2]);
        expect(getPrimeFactorOfNumber(9)).toEqual([3,3]);
        expect(getPrimeFactorOfNumber(25)).toEqual([5,5]);
        expect(getPrimeFactorOfNumber(49)).toEqual([7,7]);
    });
    it("returns a combination of prime numbers in ascending order",()=>{
        expect(getPrimeFactorOfNumber(1155)).toEqual([3,5,7,11]);
        expect(getPrimeFactorOfNumber(119239)).toEqual([43,47,59]);
    });
});

