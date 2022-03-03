
//for loop

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var num=[1234];


inp.on("line", (data) => {
  num=data;
});

inp.on("close", () => {
 let sum = 0;
 
    for (let i = 0; i < num.length; i++)
    {
        sum = sum + parseInt(num[i]);
        
    }
    console.log(sum)
});