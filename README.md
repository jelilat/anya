# Random Number Generator

Given a random number generator that gives a number between 9 and 20 inclusive. We need to convert it into a random number generator that generates a random number between 1 and 100 inclusive instead. 

## Generating the Random Number

In JavaScript, a random number is generated using the `Math.random()` function. This function returns a random number between 0 (inclusive) and 1 (exclusive).

To generate a random number between `x` and `y` (inclusive), we use the following formula:

    randomNumber = x + Math.floor((y - x + 1) * Math.random())

For `x = 9` and `y = 20`, the formula is:

    randomNumber9To20 = 9 + Math.floor((20 - 9 + 1) * Math.random())
    => Math.random() = (randomNumber9To20 - 9) / (20 - 9)

NOTE: Removing the `Math.floor()` function cancels out the `+1` in the formula.

Similarly, for `x = 1` and `y = 100`, the formula is:

    randomNumber1To100 = 1 + Math.floor((100 - 1 + 1) * Math.random())

Substituting for `Math.random()` in the above formula, we get:

    randomNumber1To100 = 1 + (100 - 1) * ((randomNumber9To20 - 9) / (20 - 9))
    => randomNumber1To100 = Math.floor(1 + (100 - 1) * ((randomNumber9To20 - 9) / (20 - 9)))

Given a random number generator that gives a number between `a` and `b` inclusive. To convert it into a random number generator that generates a random number between `c` and `d` inclusive instead, we need to use the following formula:

    randomNumberAToB = a + Math.floor((a - b + 1) * Math.random())
    randomNumberCToD = Math.floor(c + (d - c) * ((randomNumberAToB - a) / (b - a)))