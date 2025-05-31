// Define the book object with inline type annotations
const book: {
    title: string;
    author: string;
    pages: number;
    isPublished?: boolean;
} = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isPublished: true,
};

// Log the book object to the console
console.log(book);


// console.log(book.genre); // Error: Property 'genre' does not exist on type ...


// book.pages = "many"; // Error: Type 'string' is not assignable to type 'number'

// Correct usage:
book.pages = 200; // OK