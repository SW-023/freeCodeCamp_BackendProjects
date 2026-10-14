/**
 * Checks if a number is a prime number 
 * 
 * @param { number } number 
 * @returns  { boolean } Returns true if number is prime and false otherwise  
 */
function isPrime(number){


    // I have commented these two lines out since it can cause errors;

    // if( ! Number.isFinite() ) throw new RangeError("Infinite numbers are not allowed");

    // if( typeof number === 'number') throw new TypeError('number argument must be of type number');


    // Handling special primes edge cases that is not handled correctly by the CORE section

    const specialNonPrimeNumbers = [0 , 1];

    for (num of specialNonPrimeNumbers) {

        if (num === number) return false;

    }

    const specialPrimeNumbers = [ 2, 3, 5 ];

    for ( num of specialPrimeNumbers) {

        if ( num === number ) return true;

    }


    // CORE section : the idea is to check if number is divisable by these three number as i think that these three number can divide all the non-prime numbers 


    const divBy2Result = number / 2;
    const divBy3Result = number / 3;
    const divBy5Result = number / 5;


    if( Number.isInteger(divBy2Result) ||  Number.isInteger(divBy3Result) || Number.isInteger(divBy5Result)  ){
        
        return false;

    } else {

        return true;
    }



}


module.exports = {
    isPrime
}
