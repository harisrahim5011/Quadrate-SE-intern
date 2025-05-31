"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const age = 25;
const name = "Alice";
const isLearningTypeScript = true;
const hobbies = ["programming", "hiking", "photography"];
const product = ["Laptop", 999.99];
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
const message = `Hi, I'm ${name}, age ${age}. 
I'm currently ${isLearningTypeScript ? "" : "not "}learning TypeScript.
My hobbies include: ${hobbies.join(", ")}.`;
console.log(message);
const currentRole = UserRole.Editor;
console.log(`Current user role: ${currentRole}`);
