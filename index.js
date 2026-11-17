function isPrime(number) {
    if (!Number.isInteger(number) || !Number.isFinite(number) || number <= 1) {
        return false;
    }

    return Array.from({ length: Math.sqrt(number) - 1}, (_, k) => k + 2).every((condition) => number % condition !== 0); 
    
}

module.exports = {
    isPrime: isPrime,
}