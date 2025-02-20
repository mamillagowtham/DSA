// how to access first element of array 

//to join all the data present inside array use join ()
let array = ["gowtham","15,56,3,4,5",{ content:"is new to this concepet"},78,9,6,35,"hello"];


// array.pop()   remove last element   
// array.push()  add element at last 
//array.shift()  removing first element
//array.unShift()   adding element at starting
//string is trying to convert into a number then output will be  "NAN"


// array.push(98);
// array.unshift("gowtham")
// console.log(array)

// array.forEach((ele,i)=>{console.log(ele)});
// for(let x in array)  /// in represents index
// {
//     console.log(x)};
for(let x of array) // of represents element
{
   console.log(x);
}
// array.map((ele,i)=>{  console.log(ele)});

const fun = (array,target)=>{
    
for(let x of array)
{
  if(x==target)
  {
     return true;
  }
}
   return false;
}

console.log(fun(array ,"hello"));