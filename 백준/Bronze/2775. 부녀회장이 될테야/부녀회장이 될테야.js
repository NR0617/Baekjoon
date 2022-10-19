const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input.shift());//테스트 케이스의 수

for(let i=0; i<T; i++){
    
let b = +input.shift(); //층
let c = +input.shift(); //호

let arr = [[]];

    //1. 0층 배열만들기
    for (let i = 0; i < c; i++) {
        arr[0].push(i + 1); //arr=[[1, 2, 3, 4, ...,b]];
    }

    //2. 1층 부터 b층까지 배열 만들기
    for (let i = 1; i <= b; i++) {
        arr[i] = new Array();
        //3. 각층의 1호부터 c호까지 인원수 넣기
        for (let j = 0; j < c; j++) {
            let element = arr[i - 1][j];
            // 각층의 b호의 인원수 계산하기(합계내기)
            for (let k = 0; k < j; k++) {
                element = element + arr[i - 1][k];
            }
            arr[i].push(element);
        }
    }
    console.log(arr[b][c - 1]);
}