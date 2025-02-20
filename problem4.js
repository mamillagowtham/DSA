//palindrom means it will be same if  we reverse it also


// "amma" = "amma" mom dad anna 

function palindrom(name)
{
let reverse = "";
for(let i=name.length-1;i>=0;i--)
{
    reverse +=name[i];
}
    if(reverse == name)
    {
        console.log("it is palindrom");
    }
    else{
        console.log("not a palindrom")
    }
  

}
palindrom("amma")