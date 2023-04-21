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

describe("The Prime Factorizer", ()=>{
    it("finds the prime sequence of a particular number",()=>{
        expect(getPrimeFactorOfNumber(2)).toEqual([2]);
        expect(getPrimeFactorOfNumber(4)).toEqual([2,2]);
        expect(getPrimeFactorOfNumber(8)).toEqual([2,2,2]);
        expect(getPrimeFactorOfNumber(3)).toEqual([3]);
        expect(getPrimeFactorOfNumber(9)).toEqual([3,3]);
        expect(getPrimeFactorOfNumber(6)).toEqual([2,3]);
        expect(getPrimeFactorOfNumber(25)).toEqual([5,5]);
        expect(getPrimeFactorOfNumber(1155)).toEqual([3,5,7,11]);
    });
});

function getPrimeFactorOfNumber(number:number){
    let factor = 2;

    while(number % factor != 0){
        factor++;
    }
        
    const primeFactors = [factor];
    const remainder = number / factor;
    
    if(remainder > 1)
        return primeFactors.concat(getPrimeFactorOfNumber(remainder));

    return primeFactors;
}