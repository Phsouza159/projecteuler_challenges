/**
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
    URL: https://projecteuler.net/problem=1
 */

const NUM_MAX_MULTIPLES = 1000
    , NUM_ARGS_X = 3
    , NUM_ARGS_Y = 5

/**
 * check if the number is multiple
 * @param {number} number 
 * @param {number[]} numbersMultiple 
 */
let isMultipleByNumber = (number, numbersMultiple) => {
    return numbersMultiple.map(numberMultiple => (number % numberMultiple) == 0).includes(true)
}


/**
 * Get the multiples
 * @param {number} limitOfMultiples 
 * @param {number[]} numberMultiple 
 */
let getMultiples = (limitOfMultiples, ...numbersMultiple) => {

    let numbersMultiples = []

    for (let x = 0; x < limitOfMultiples; x += 1) {

        let isMultiple = isMultipleByNumber(x, numbersMultiple)
        if (isMultiple) {

            numbersMultiples.push(x)
        }
    }

    return numbersMultiples
}


let totalSum = getMultiples(NUM_MAX_MULTIPLES, NUM_ARGS_X, NUM_ARGS_Y).reduce((a, b) => a + b)

console.log(`This the sum of all the multiples of ${NUM_ARGS_X} or ${NUM_ARGS_Y} below ${NUM_MAX_MULTIPLES}: ${totalSum}`)

