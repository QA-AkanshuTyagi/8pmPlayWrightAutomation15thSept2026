// let name1 = "Rohit";
// let name2 = "Nayal";

// console.log(name1 + " " + name2);

let fname = "Rohit Nayal";
// console.log(fname);

// console.log(fname.length);   // ye string ki length batata h
// console.log(fname.toUpperCase());   // ye string ko upper case mein convert kar deta h
// console.log(fname.toLowerCase());   // ye string ko lower case mein convert kar deta h
// console.log(fname[0]);   // ye string ke first character ko print karega
// console.log(fname[1]);   // ye string ke second character ko print karega
// console.log(fname[2]);   // ye string ke third character ko print karega
// console.log(fname[3]);   // ye string ke fourth character ko print karega
// console.log(fname[4]);   // ye string ke fifth character ko print karega
// console.log(fname[5]);   // ye string ke sixth character ko print karega
// console.log(fname[6]);   // ye string ke seventh character ko print karega
// console.log(fname[7]);   // ye string ke eighth character ko print karega
// console.log(fname[8]);   // ye string ke ninth character ko print karega
// console.log(fname[9]);   // ye string ke tenth character ko print karega
// console.log(fname[10]);   // ye string ke eleventh character ko print karega

// console.log(fname.charAt(0));   // ye string ke first character ko print karega
// console.log(fname.charAt(1));
// console.log(fname.charAt(2));
// console.log(fname.charAt(3));
// console.log(fname.charAt(4));
// console.log(fname.charAt(5));
// console.log(fname.charAt(6));
// console.log(fname.charAt(7));
// console.log(fname.charAt(8));
// console.log(fname.charAt(9));
// console.log(fname.charAt(10));

// console.log(fname.split(""));   // ye string ko array mein convert kar deta h
// console.log(fname.split(" "));
// console.log(fname.split("a"));   // ye string ko array mein convert kar deta h aur 'a' ke basis pe split kar deta h
// console.log(fname.split("t"));   // ye string ko array mein convert kar deta h aur 'n' ke basis pe split kar deta h

// for(i=0;i<fname.length;i++)
// {
//     console.log(fname.charAt(i));   // charAt ke andr bracket mein dont forget to write i
//                                    //else it will only print r and not the whole string one by one.
// }

// for(i=0; i<fname.length;i++) 
// {
//     console.log(fname.at(i));
// }

console.log(fname.endsWith("l"));   // ye string ke last character ko check karega ki kya ye 'l' se end hota h ya nahi
console.log(fname.endsWith("a"));   // ye string ke last character ko check karega ki kya ye 'a' se end hota h ya nahi
console.log(fname.endsWith("n"));   // ye string ke last character ko check karega ki kya ye 'n' se end hota h ya nahi

console.log(fname.includes("Rohit"));   // ye string ke andar 'Rohit' present h ya nahi check karega
console.log(fname.includes("Nayal"));