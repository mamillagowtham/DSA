//sum of digit of a number

 // 58496  = 5+8+4+9+6


//  function sumOfDigits(num)
//  {
//   let sum = 0;
//   while(num > 0)
//   {
//       sum +=num%10;
//       num = Math.floor(num/10);
//   }
//   return sum;

//  }
//  console.log(sumOfDigits(1234))


function sumOfDigits(num)
{
    return num.toString().split('').map(Number).reduce((sum,digit)=>sum+digit,0)
}
let result =sumOfDigits(12455)//17
console.log(result)




