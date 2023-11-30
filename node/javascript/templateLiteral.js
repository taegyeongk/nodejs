let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();

//백틱은 내부에서 줄바꿈을 허용하며 홀따옴표는 허용하지 않는다.
let msg = `${year}년
${month}월
${day}일`;

console.log(msg);