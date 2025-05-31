
// types.ts

// 1. Primitive Types
const age: number = 25; // Number type for age
const name: string = "Alice"; // String type for name
const isLearningTypeScript: boolean = true; // Boolean type for learning status

// 2. Array of strings
const hobbies: string[] = ["programming", "hiking", "photography"];

// 3. Tuple for product information
const product: [string, number] = ["Laptop", 999.99]; // Fixed-type sequence

// 4. Enum for user roles
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

// 5. Create message using template literals
const message: string = `Hi, I'm ${name}, age ${age}. 
I'm currently ${isLearningTypeScript ? "" : "not "}learning TypeScript.
My hobbies include: ${hobbies.join(", ")}.`;

// 6. Log the message
console.log(message);

// Optional: Demonstrate enum usage
const currentRole: UserRole = UserRole.Editor;
console.log(`Current user role: ${currentRole}`);

export { }; // Makes this file a module to avoid global scope pollution one declared as name 