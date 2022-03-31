const randomgen = require('./index.js');

test("Ensure that nineToTwentyGenerator always return a number between 9 and 20 inclusive", () => {
    expect(randomgen.nineToTwentyGenerator()).toBeGreaterThanOrEqual(9);
    expect(randomgen.nineToTwentyGenerator()).toBeLessThanOrEqual(20);
})

test("For all numbers between 9 and 20 inclusive, check if oneToHundredGenerator return value is between 1 and 100 inclusive", () => {
    for (let i = 9; i <= 20; i++) {
        const randomNumber = randomgen.oneToHundredGenerator(i);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(100);
    }
})