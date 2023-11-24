//11.24 수업
//reduce 는 초기값을 매개변수로 받을 수 있다.
let nums = [50, 15, 39, 555, 6, 804];
let total = nums.reduce((sum, num)=> {
    return sum + num;
}, -1000);

console.log(total);