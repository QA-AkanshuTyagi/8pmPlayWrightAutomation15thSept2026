let fname = " akanashu is my name ";
let lname = "tyagi";
let f = "AKANSHU";
let array1 = ["hello", "my", "name"];
let a = 10;
let b = 10;
// console.log(fname.at(0));
// console.log(fname.at(1));
// console.log(fname.at(2));

// for (let i = 0; i < fname.length; i++) {
//   console.log(fname.at(i));
// }
const arr = fname.split("");

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//======================
// for (let each of arr) {
//   console.log(each);
// }
//============================
// for (let i = 0; i < fname.length; i++) {
//   console.log(fname.charAt(i));
// }

console.log(fname.charAt(6));

console.log(fname.concat(" ").concat(lname).concat(" ").concat(10));

console.log(fname.endsWith("u"));
console.log(fname.includes("aka"));
console.log(fname.indexOf("a"));
console.log(fname.lastIndexOf("a"));
console.log(fname.length);
console.log(fname.padEnd(13, "rahu"));
console.log(fname.padStart(12, "sah"));
console.log(fname.repeat(2)); //akanashuakanashu
console.log(fname.replace("aka", "hello"));
console.log(fname.replaceAll(" ", ""));
console.log(fname.slice(0, 4));
console.log(fname.substring(0, 4));
console.log(fname.split(""));
console.log(f.toLowerCase());
console.log(fname.toUpperCase());
console.log(array1.toString());
console.log(a.toString() + b);
console.log(fname.trim());
console.log(fname);
