
///  missing number 


// let array = [0,1,4,5,8,7,2,6];
// let sum = 0;
// for(let i=0;i<array.length;i++)
// {
//     sum += array[i];
// }

//  let missing_number =  array.length*(array.length+1)/2 - sum ;

//  console.log(missing_number);




 let array = [0,1,2,3,5,4,7];
console.log(miss(array));
 function miss(num)
 {
   //  let sum = 0;
   //       for(let i=0;i<num.length;i++)
   //       {
   //              sum += num[i]
   //       }
      let   missing_number =  num.length*(num.length+1)/2 - num.reduce((acc,curr,index)=>  { return acc+curr },0)
           return missing_number;
   }
  

