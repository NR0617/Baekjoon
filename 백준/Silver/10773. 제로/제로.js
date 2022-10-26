let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const firstNum = Number(input[0]);
const stack = [];

for (let i=1; i<=firstNum; i++){
    if(Number(input[i])!==0){
        stack.push(Number(input[i]));    
    } else {
        stack.pop();
    }
}

let result = 0;
for (let i=0; i<stack.length; i++){
    result += stack[i];
}
console.log(result);