export function getPrimeFactorOfNumber(number:number){
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