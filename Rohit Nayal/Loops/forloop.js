for(let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}


let name1="Rohit Nayal";
for (let i = 0; i < name1.length; i++) {
    console.log(name1[i]);
}


let fruits = ["Apple", "Mango", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


let numbers1 = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
    sum = sum + numbers1[i];
}

console.log("Sum =", sum); 