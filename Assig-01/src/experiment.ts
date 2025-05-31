// src/experiment.ts
// Add a comment here
const calculateArea = (width:number, height:number) =>  { // Parameters 'width' and 'height' implicitly have an 'any' type.
  return width * height;
}

let result = calculateArea(5, 10);  
console.log(`The area is ${result}`);