let name1 = "Rohit";
let name2 = "Nayal";

console.log(name1 + " " + name2);

let fname = "Rohit";
let lname = "Nayal";
console.log(fname);

console.log(fname.length);   // ye string ki length batata h
console.log(fname.toUpperCase());   // ye string ko upper case mein convert kar deta h
console.log(fname.toLowerCase());   // ye string ko lower case mein convert kar deta h
console.log(fname[0]);   // ye string ke first character ko print karega
console.log(fname[1]);   // ye string ke second character ko print karega
console.log(fname[2]);   // ye string ke third character ko print karega
console.log(fname[3]);   // ye string ke fourth character ko print karega
console.log(fname[4]);   // ye string ke fifth character ko print karega
console.log(lname[0]);   // ye string ke first character ko print karega
console.log(lname[1]);   // ye string ke second character ko print karega
console.log(lname[2]);   // ye string ke third character ko print karega
console.log(lname[3]);   // ye string ke fourth character ko print karega
console.log(lname[4]);   // ye string ke fifth character ko print karega


console.log(fname.charAt(0));   // ye string ke first character ko print karega
console.log(fname.charAt(1));  // ye string ke second character ko print karega
console.log(fname.charAt(2));  // ye string ke third character ko print karega
console.log(fname.charAt(3));  // ye string ke fourth character ko print karega
console.log(fname.charAt(4));  // ye string ke fifth character ko print karega
console.log(lname.charAt(1));  // ye string ke first character ko print karega
console.log(lname.charAt(2));  // ye string ke secondcharacter ko print karega
console.log(lname.charAt(3));  // ye string ke third character ko print karega
console.log(lname.charAt(4));  // ye string ke forth character ko print karega
console.log(lname.charAt(5));  // ye string ke fifth character ko print karega


console.log(fname.split(""));   // ye string ko array mein convert kar deta h
console.log(fname.split(" "));
console.log(lname.split("a"));   // ye string ko array mein convert kar deta h aur 'a' ke basis pe split kar deta h
console.log(fname.split("t"));   // ye string ko array mein convert kar deta h aur 'n' ke basis pe split kar deta h

for(i=0;i<fname.length;i++)
{
    console.log(fname.charAt(i));   // charAt ke andr bracket mein dont forget to write i
                                   //else it will only print r and not the whole string one by one.
}

for(i=0; i<fname.length;i++) 
{
    console.log(fname.at(i));
}

console.log(lname.endsWith("l"));   // ye string ke last character ko check karega ki kya ye 'l' se end hota h ya nahi
console.log(fname.endsWith("t"));   // ye string ke last character ko check karega ki kya ye 't' se end hota h ya nahi
console.log(fname.endsWith("n"));   // ye string ke last character ko check karega ki kya ye 'n' se end hota h ya nahi

console.log(fname.includes("Rohit"));   // ye string ke andar 'Rohit' present h ya nahi check karega
console.log(lname.includes("Nayal"));   // ye string ke andar 'Nayal' present h ya nahi check krega
console.log(fname.indexOf("i"));  // ye string ke andar 'i' ka index batayega
console.log(lname.indexOf('a'));  // ye string ke andar 'a' ka index batayega
console.log(lname.lastIndexOf('a')); // ye string ke andar 'a' ka last index batayega
console.log(fname.length);  // ye string ki length batayega
console.log(lname.length);  // ye string ki length batayega
console.log(fname.split("t"));  // ye string ko array mein convert kar deta h aur space ke basis pe split kar deta h
console.log(fname.startsWith("R"));  // ye string ke first character ko check karega ki kya ye 'R' se start hota h ya nahi
console.log(lname.startsWith("N"));  // ye string ke first character ko check karega ki kya ye 'N' se start hota h ya nahi
console.log(lname.padEnd(20, "*"));  // ye string ke end mein '*' add kar deta h aur total length 20 kar deta h
console.log(fname.padStart(20, "*")); // ye string ke start mein '*' add kar deta h aur total length 20 kar deta h
console.log(fname.concat(" ", lname).concat(" ", 16));  // ye string ke andar 'lname' aur '16' add kar deta h