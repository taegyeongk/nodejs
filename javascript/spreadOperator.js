//펼침연산자
let array = [1,2,3];
let string = "Hello";

// [1, 2, 3, "H", "e", "l", "l", "o"]
//펼침 연산자 사용할 경우 해당 변수 앞에 ...을 붙여주면 for of 와 같은 효과를 냄 ...이 없을 경우 배열 자체로 들어가게됨.
let newArray = [...array, ...string]; 
console.log(newArray);

// let newArray = [];
// for(let value of array){
//     newArray.push(value);
// }
// for(let value of string){
//     newArray.push(value);
// }
// console.log(newArray);


