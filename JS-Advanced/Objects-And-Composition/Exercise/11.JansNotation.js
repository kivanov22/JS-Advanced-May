function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i];

        if (Number(currentElement)) {
            result.push(Number(currentElement));
        } else {
            operations(result, currentElement);
        }
    }

    if (result.length >= 2) {
        console.log("Error: too many operands!");
    } else if (result.length != 0) {
        console.log(result.toString());
    }

    function operations(result, operator) {
        if (result.length == 0 || result.length == 1) {
            console.log("Error: not enough operands!");
        }

        if (operator === '+') {
            result[result.length - 2] = result[result.length - 2] + result[result.length - 1];
            result.splice(-1, 1);
        }
        else if (operator === '-') {
            result[result.length - 2] = result[result.length - 2] - result[result.length - 1];
            result.splice(-1, 1);
        }
        else if (operator === '*') {
            result[result.length - 2] = result[result.length - 2] * result[result.length - 1];
            result.splice(-1, 1);
        }
        else if (operator === '/') {
            result[result.length - 2] = result[result.length - 2] / result[result.length - 1];
            result.splice(-1, 1);
        }
    }

}


console.log(solve([3,
    4,
    '+']
));

console.log(solve([5,
    3,
    4,
    '*',
    '-']
));