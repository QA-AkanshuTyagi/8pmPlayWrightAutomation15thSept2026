let fname="radhamadhav";
let lname="radharaman";
console.log(fname);         //this will print the value of string i.e. radhamadhav


//--------------------------to print value of string one by one --------------------
// console.log(fname[0]);
// console.log(fname[1]);
// console.log(fname[2]);
// console.log(fname.at(0));


//---------------------------split method is used to split whole string into array -------
// console.log(fname.split(""));        // will convert string into array
// console.log(fname.split("m"));   // will divide into 2 arrays left and right side of 'm'.
// console.log(fname.split("a"));   // will split string into many arrays w.r.t 'a'.


//----------------------------using charAt method()-----------------------------------
// console.log(fname.charAt(0));
// console.log(fname.charAt(1));
// console.log(fname.charAt(2));
// console.log(fname.charAt(3));
// console.log(fname.charAt(4));
// console.log(fname.charAt(5));

//----------------------------using for loop to print whole string-----------------------
// for(i=0;i<fname.length;i++)
// {
//     console.log(fname.charAt(i));   // charAt ke andr bracket mein dont forget to write i
//                                    //else it will only print r and not the whole string one by one.
// }



//------------------------for loop-------------------------------------
// for(i=0; i<fname.length;i++)
//     console.log(fname.at(i));

//--------------------------------for of loop-----------------------------------------
// for(let item of fname)
//     console.log(item);


//------------------------------------------------------------------------------------
// console.log(fname,lname);   //isme hamesha , aata h beech mein . nahi
// console.log(fname.concat(" ").concat(lname).concat(" ").concat("hello"));



//---------------------------ends with()--------------------------------------------
// console.log(fname.endsWith("v"));
// console.log(fname.endsWith("n"));
// console.log(fname.endsWith("o"));



//---------------------------includes()-----------------------------------------
// console.log(fname.includes("dhav"));    // ye string mein present h ya nahi
// console.log(lname.includes("man"));
// console.log(fname.includes("dha"));


//----------------------------------indexof()---------------------------------
// console.log(fname.indexOf("d"));
// console.log(lname.indexOf("n"));             //string ke andr ye letters h ya nhi n if 
// console.log(fname.indexOf("v"));            //present then konse index par



//----------------------------------lastIndexOf-----------------------------------

console.log(fname.lastIndexOf("v"));      // jo string uske back se ye letter konse index pr 
console.log(lname.lastIndexOf("a"));     // depend karta h 
console.log(fname.lastIndexOf("h"));
console.log(fname.lastIndexOf("dh"));


//---------------------------------------------------------------------------------------

// const arr = fname.split("");   //this will split the string into an array
// console.log(arr);            //will print the array which was split using split function
// for (let ar of arr)        // for loop to print each element of an array without using 
//     console.log(ar);       //console.log again and again for each element of an array.


//---------------------------------------------------------------------------------------
// const arr =["Radha", "Krishna","Madhav"];
// console.log(arr);
// for (let item of arr)
//     console.log(item);