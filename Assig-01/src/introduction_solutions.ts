// Part A Solutions

// Snippet 1
function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

// Snippet 2
interface User {
    name: string;
    age: number;
    email?: string;
}

let user: User = { name: "Alice", age: 30 };
user.email = "alice@example.com";
// user.age = "thirty"; // TypeScript error

// Snippet 3
interface DisplayUser {
    name: string;
    age: number;
    isActive: boolean;
}

function displayUserInfo(user: DisplayUser): boolean {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
    return user.isActive;
}

// Part B Solutions (as comments)

/*
Scenario 1 (Large Team):
TypeScript's static typing ensures all developers adhere to defined types, acting as documentation and reducing integration issues by catching errors early.

Scenario 2 (Missing Properties):
Interfaces enforce required properties, so TypeScript flags incomplete objects during compilation, preventing runtime errors.

Scenario 3 (Refactoring):
TypeScript's IDE tools enable safe renaming, automatically updating all references, which reduces errors in large-scale changes.

Scenario 4 (New Team Member):
Type annotations clarify expected inputs/outputs, making code self-documenting and easing the learning curve for new developers.
*/