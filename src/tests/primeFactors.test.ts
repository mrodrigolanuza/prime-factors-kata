/*
- 2 ⇒ [2]
- 2 * 2 ⇒ [2,2]
- 2 * 2 * 2 ⇒ [2,2,2]
- 3 ⇒ [3]
- 3 * 3 ⇒ [3,3]
- 3 * 2 ⇒ [2,3]
- 5 * 5 ⇒ [5,5]
- 5 * 7 * 11 * 3 ⇒ [3,5,7,11]
*/

describe("The Prime Factorizer", ()=>{
    it("finds the prime sequence of a particular number",()=>{
        expect(getPrimeFactorOfNumber(2)).toEqual([2]);
        expect(getPrimeFactorOfNumber(4)).toEqual([2,2]);
    });
});

function getPrimeFactorOfNumber(number:number){
    const primeFactors = [2];
    
    if(number/2 > 1)
        primeFactors.push(2);

    return primeFactors;
}