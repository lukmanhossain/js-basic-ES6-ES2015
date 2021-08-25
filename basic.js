// Variable

var deposit = 400;

// Condition

if (deposit > 500) {
    .........!
}
else if (deposit < 500) {
    .........!
}
else if (deposit == 500) {
    .........!
}
else if (deposit != 500) {
    .........!
}
else if (deposit >= 500) {
    .........!
}
else if (deposit <= 500) {
    .........!
}
else {
    .........!
}

// Array

const numbers = [1, 2, 3, 4, 25, 23, 52, 45, 12, 65];
const countNumber = numbers.length;
numbers.pop(12); // for pop(remove) 12 from index
numbers.push(256); // for push(add) 256 in index
numbers[2] = 625; // for change index number

// Check wheather 265 included in the array

if (numbers.indexOf(265) != -1) { // -1 means value isn't in the array

}
if (numbers.includes(265)) { // if 265 is in the array then the "includes" said true; either said false

}

// loop
// for, while, 
// for(.....of.....){(use this loop) when we want to use it an array condition }

for (const number of numbers) {
    .........!
}

// Function

function fullName(first, second) {
    const name = first + '' + second;
}
const person = fullName('Rahim', 'Ali');


