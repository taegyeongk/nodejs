const { clearInterval } = require("timers");

const timeout = setTimeout(()=>{
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDay()).slice(-2);
    console.log(`${year}년 ${month}월 ${day}일`);
}, 1000);

let count = 0;
const interval = setInterval(()=>{
    console.log('interval %d', count++);
    if(count == 5){
        clearInterval(interval);
    }
},1000);


//setimmediate 안에 있는 코드는 우선순위가 낮음으로 다른 코드보다 늦게 출력되지만 콜백 함수중에서는 높게 실행이 됨. 다만 먼저 나온다는 보장은 없다.
const immediate = setImmediate(()=>{
    console.log('즉시 실행 요청');
})
console.log('마지막코드');