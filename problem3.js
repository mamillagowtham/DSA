//count number of digits of a number



// function countNumber(number)
// {
//     let count =  number.length;
//     console.log(count);
// return count;
// }
// console.log(countNumber("4562"));


// let array = ["hi","raju","how", "are","you"];
// console.log(array.length);                      

let count = 0;
function digcount(input)
{
 let num =input.toString()
    for(let i=0;i<num.length;i++)
        {
            if(num[i])
                {
                    count++;
                }
            }
            return count;
    }
console.log(digcount(123454682125));
