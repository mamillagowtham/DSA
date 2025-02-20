
//sum of given array

let array = [0,1,4];
console.log(sumofarray(array));
function sumofarray(num)
{
 return    num.reduce((acc,curr)=> acc+curr,0)

}