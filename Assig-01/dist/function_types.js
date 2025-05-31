"use strict";
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return Infinity;
    }
    return a / b;
};
function executeOperation(a, b, operation) {
    return operation(a, b);
}
console.log('Add:', executeOperation(10, 5, add));
console.log('Subtract:', executeOperation(10, 5, subtract));
console.log('Multiply:', executeOperation(10, 5, multiply));
console.log('Divide:', executeOperation(10, 5, divide));
console.log('Divide by zero:', executeOperation(10, 0, divide));
