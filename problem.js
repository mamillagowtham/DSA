
//sum of natural numbers

function naturalNumber (num)
{
 let sum = 0;
 for(let i=0;i<=num;i++)
 {
  sum +=i;
 }
 return sum;
}
console.log(naturalNumber(10));




function anotherway(num)
{
    return num*(num+1)/2;   // 
}
 console.log(anotherway(5));