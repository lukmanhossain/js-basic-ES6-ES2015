let balance = 1240;
balance = 1640;

const username = 'Hossain';
const weTogether = 'Lukman ' + username;
console.log(weTogether);

const numbers = [21, 26, 63, 56, 89];
// numbers = [56, 56, 23, 68, 95]; // Not allowed
numbers.push(556);
numbers[1] = 56;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}

const student = { name: 'Lukman', roll: 022, job: 'intern' };
student.name = 'Hossain';
// student = {name:'Hossain'}; // Not Allow

