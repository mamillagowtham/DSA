//num will be multiply twice than itself

function container(num)
{

    let array = [];
    for(let i=1;i<=num;i = i*2)
    { 
       array.push(i);
    }
   return array
}
console.log(container(100));