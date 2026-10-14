let fname = "akanashu";
let lname = "tyagi";
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
