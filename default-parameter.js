// Step-01 //

// function add(num1, num2) {
//     const total = num1 + num2;
//     return total;
// }

// const result = add(15, 23);
// console.log(result);


// Step-02 //

// when number is undefined
function add(num1, num2 = 0) {

    // Option-02
    // num2 = num2 || 0; // short-cut 

    // option-01
    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    const total = num1 + num2;
    return total;
}

const result = add(15);
console.log(result);
