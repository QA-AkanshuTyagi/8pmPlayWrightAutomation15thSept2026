let fname = "shilpa1";
let fnames =["radha","krishna","vrindavan", "barsana", "braj", true, 0, 100, null, undefined ];

//     In JAVASCRIPT  An array can contain string , number, boolean,null , undefined.
//     But in TYPESCRIPT this is not possible in an array.



console.log(fname);
console.log(fnames);

fnames[1]="madhav"
// console.log(fnames[0]);    //this is to print every word individually from an array rather
// console.log(fnames[1]);    //than printing the whole array together and this is called
// console.log(fnames[2]);    // INDEXING. At time of indexing we start from 0 rather than 1.
// console.log(fnames[3]);    // i.e. JAVASCRIPT uses zero-based indexing.
// console.log(fnames[4]);
// console.log(fnames[5]);
// console.log(fnames[6]);
// console.log(fnames[7]);

// console.log(fnames.length);  //this is to find the length of the array i.e. how many
// // words are present in the array.


for (let i=0; i<fnames.length;i++)            // we are using this  for loop to print all the words 
{                                    // in the array without using console.log again and again
        console.log(fnames[i]);      //for printing every word of the array individually.
}                                  

//In this for loop i was making a mistake and i wrote i<fnames instead of i<fnames.length 
//and due to this i wasn't getting the output.


//Remember this :- fnames → the complete array.
//                 fnames.length → the number of elements in the array.
//                 fnames[i] → the element at the current index.