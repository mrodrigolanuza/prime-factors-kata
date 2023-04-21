export function getPrimeFactorOfNumber(number:number){
    const prime = findSmallestPrime(number);
    const remainder = number / prime;
    return remainder <= 1 ? [prime] : [prime].concat(getPrimeFactorOfNumber(remainder));
}

function findSmallestPrime(number:number){
    let factor = 2;
    while(number % factor != 0){
        factor++;
    }
    return factor;
}

