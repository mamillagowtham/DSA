//shallow copy 


let array = [52,{name:"vishal"},["ramo"],true,"gowtham"];

// let arrayb= array;

// arrayb.slice(1,2)
// console.log(array,arrayb)



// by using spread operator (or) concat (or)  from    to  do deep copy 

let arrayc = [...array];

arrayc.splice(1,4);
console.log(arrayc,array);


