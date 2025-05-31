"use strict";
function addNumbers(a, b) {
    return a + b;
}
function concatStrings(str1, str2) {
    return str1 + str2;
}
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}
function logMessage(message) {
    console.log(message);
}
const sum = addNumbers(10, 5);
console.log('Sum:', sum);
const concatenated = concatStrings('Hello, ', 'world!');
console.log('Concatenated:', concatenated);
const average = calculateAverage([2, 4, 6, 8]);
console.log('Average:', average);
logMessage('This is a log message.');
function createGreeting(name, title) {
    if (title) {
        return `Hello, ${title} ${name}!`;
    }
    return `Hello, ${name}!`;
}
function calculateOrderTotal(price, quantity = 1, discountCode) {
    let total = price * quantity;
    if (discountCode === "SAVE10") {
        total *= 0.9;
    }
    return total;
}
function sumAllNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(createGreeting("Alice"));
console.log(createGreeting("Bob", "Dr."));
console.log(calculateOrderTotal(100));
console.log(calculateOrderTotal(50, 3));
console.log(calculateOrderTotal(200, 2, "SAVE10"));
console.log(calculateOrderTotal(80, undefined, "SAVE10"));
console.log(sumAllNumbers(1, 2, 3));
console.log(sumAllNumbers(10, 20, 30, 40));
console.log(sumAllNumbers());
