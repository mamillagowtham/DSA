// sum of matrix in array
// let result = array.join()  it is used to combine all the matrixes in one array

let matrix = [[1,2,3],[4,5,6],[7,8,9,10]];

function sumofmatrix(array)
{
   let sum =0;
   for(let i=0;i<array.length;i++)
   {
     for(let j=0;j<array[i].length;j++)
     {
            sum += array[i][j];
     }
   }
   return sum
}
let result =  sumofmatrix(matrix) 
console.log(result);