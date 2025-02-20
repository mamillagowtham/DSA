//fabinocci series

//every next number is found by adding  two  previous  numbers
// 0,1,1,2,3,5,8,13,21




// function fibonacciSeries(n) {
//     let fibSequence = [0, 1];  
  
//     for (let i = 2; i < n; i++) {
//       let nextTerm = fibSequence[i - 1] + fibSequence[i - 2]; 
//       fibSequence.push(nextTerm);  }
  
//     return fibSequence
//   }
  
  
//   let result = fibonacciSeries(10);
//   console.log( result);
  




function fab(n)
{
   let fabseq = [0,1];

   for(let i=2;i<=n;i++)
   {
    let nextnumber = fabseq[i-1]+fabseq[i-2];

    fabseq.push(nextnumber)
   }
   return fabseq;
}


console.log(fab(10));





