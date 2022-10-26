const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const input = ['2','6 12 10','30 50 72'];
const A = Number(input.shift());// 첫번째 값 제거, 테스트 케이스

for(let i = 0; i<A; i++){
   const arr= input[i].split(' ')
   const H = Number(arr[0]); //H층
   const N = Number(arr[2]); //N명
   let count = 1;
   let floor = N;
    
    while(floor-H>0){
        floor -= H;
        count++;
    }
     console.log(floor*100+count);
}