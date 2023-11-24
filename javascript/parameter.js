function printMsg(msg = '메세지를 입력해주세요'){ //매개변수가 여러개일 경우 옆에 동일한 방식으로 추가해주면 됨.
    console.log(msg);
}

printMsg('Have A Nice Day');
printMsg();

function sum(x,y, ...args){
    let result = x + y;
    console.log(args.length);
    for(let num of args){
        result += num;
    }
    return result;
}

console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
//값이 늘어날 때 마다 배열처럼 된다. 나머지 매개변수를 사용하게되면 배열을 순환하기 위해서 for of 를 많이 사용함.
