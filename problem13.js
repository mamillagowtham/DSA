// check if the array's data is same or not
let array = ["a", "b", "c", "d", "e", "f", "g", "h"];

let array1 = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(array === array1);  //false
console.log(JSON.stringify(array) === JSON.stringify(array1)); // true


const check = (array, array1) => {

    // if (array.length !== array1.length) {
    //     return false;
    // }
    // for (let i = 0; i < array.length - 1; i++) {
    //     if (array[i] !== array1[i]) {

    //         return false;
    //     }
    // }
    // return true;

    return array.length === array1.length && array.every((ele,i)=>{  return array[i] == array1[i]})
}

console.log(check(array, array1));