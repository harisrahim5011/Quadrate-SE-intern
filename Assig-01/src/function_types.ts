// Type alias for arithmetic operations
type ArithmeticOperation = (a: number, b: number) => number;

// Arithmetic functions
const add: ArithmeticOperation = (a, b) => a + b;

const subtract: ArithmeticOperation = (a, b) => a - b;

const multiply: ArithmeticOperation = (a, b) => a * b;

const divide: ArithmeticOperation = (a, b) => {
    if (b === 0) {

        return Infinity;
    }
    return a / b;
};

// Higher-order function to execute an operation
function executeOperation(a: number, b: number, operation: ArithmeticOperation): number {
    return operation(a, b);
}

// Test cases
console.log('Add:', executeOperation(10, 5, add));         // 15
console.log('Subtract:', executeOperation(10, 5, subtract)); // 5
console.log('Multiply:', executeOperation(10, 5, multiply)); // 50
console.log('Divide:', executeOperation(10, 5, divide));     // 2
console.log('Divide by zero:', executeOperation(10, 0, divide)); // Infinity