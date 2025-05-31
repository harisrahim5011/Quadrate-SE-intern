// Define a type alias for a product object
type ProductType = {
    id: number;
    name: string;
    price: number;
    description?: string;
};

// Define an interface for a product object
interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
}

// Create an object instance using ProductType
const productTypeInstance: ProductType = {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "A high-performance laptop"
};

// Create an object instance using IProduct
const iProductInstance: IProduct = {
    id: 2,
    name: "Smartphone",
    price: 800
};

console.log("ProductType instance:", productTypeInstance);
console.log("IProduct instance:", iProductInstance);

/*
Similarity:
- Both type aliases and interfaces can be used to define the shape of an object in TypeScript.

Difference:
- Interfaces support declaration merging (multiple declarations with the same name are merged), while type aliases do not.
- Type aliases can represent unions, intersections, and primitives, whereas interfaces are limited to object shapes.
*/