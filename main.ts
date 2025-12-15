/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Dec 2025
 * This program calculates and outputs area and perimeter of a 5x3 rectangle.
*/

// dimensions
const length: number = 5;
const width: number = 3;

// process
const area: number = length * width;
const perimeter: number = 2 * (length + width);

// output
console.log("Rectangle Dimensions:");
console.log(`Length: ${length} cm`);
console.log(`Width: ${width} cm`);

console.log("\nResults:");
console.log(`Area: ${area} cm^2`);
console.log(`Perimeter: ${perimeter} cm`);
console.log(`Done.`);

