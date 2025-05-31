// Function to add two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Function to concatenate two strings
function concatStrings(str1: string, str2: string): string {
    return str1 + str2;
}

// Function to calculate the average of an array of numbers
function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Function to log a message to the console
function logMessage(message: string): void {
    console.log(message);
}

// Calling the functions with correct arguments
const sum = addNumbers(10, 5);
console.log('Sum:', sum);

const concatenated = concatStrings('Hello, ', 'world!');
console.log('Concatenated:', concatenated);

const average = calculateAverage([2, 4, 6, 8]);
console.log('Average:', average);

logMessage('This is a log message.');

// addNumbers("hello", 5); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// concatStrings(10, 20); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// calculateAverage("not an array"); // Error: Argument of type 'string' is not assignable to parameter of type 'number[]'.
// logMessage(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

function createGreeting(name: string, title?: string): string {
    if (title) {
        return `Hello, ${title} ${name}!`;
    }
    return `Hello, ${name}!`;
}

function calculateOrderTotal(price: number, quantity: number = 1, discountCode?: string): number {
    let total = price * quantity;
    if (discountCode === "SAVE10") {
        total *= 0.9;
    }
    return total;
}

function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Test createGreeting
console.log(createGreeting("Alice"));
console.log(createGreeting("Bob", "Dr."));

// Test calculateOrderTotal
console.log(calculateOrderTotal(100));
console.log(calculateOrderTotal(50, 3));
console.log(calculateOrderTotal(200, 2, "SAVE10"));
console.log(calculateOrderTotal(80, undefined, "SAVE10"));

// Test sumAllNumbers
console.log(sumAllNumbers(1, 2, 3));
console.log(sumAllNumbers(10, 20, 30, 40));
console.log(sumAllNumbers());