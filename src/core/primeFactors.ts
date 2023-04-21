export function getPrimeFactorOfNumber(number:number){
    checkIsPositiveNumber(number);
    return primeFactors(number);
}

function checkIsPositiveNumber(number){
    if(number <= 0) throw Error("Must be a number greater than zero");
}

function primeFactors(number:number){
    const prime = findSmallestPrime(number);
    const remainder = number / prime;
    return remainder <= 1 ? [prime] : [prime].concat(getPrimeFactorOfNumber(remainder));
}

function findSmallestPrime(number:number){
    if(number === 1) return 1;
    let factor = 2;
    while(number % factor != 0){
        factor++;
    }
    return factor;
}

