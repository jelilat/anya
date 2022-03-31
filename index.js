// We are given a random number generator that generates a random number between 9 and 20 inclusive
function nineToTwentyGenerator() {
    const min = 9;
    const max = 20;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// We convert the random number generated to a number between 1 and 100 inclusive
function oneToHundredGenerator(random9To20) {
    const min = 1;
    const max = 100;

    const random1To100 = ((random9To20 - 9) / (20 - 9)) * (max - min) + min;
    return Math.floor(random1To100);
}

const random9To20 = nineToTwentyGenerator();
const randNumber = oneToHundredGenerator(random9To20);
console.log(randNumber);

module.exports = {
    nineToTwentyGenerator,
    oneToHundredGenerator
}