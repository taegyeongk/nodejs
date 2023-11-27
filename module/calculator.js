const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

//exports 는 내보내자고 하는 대상을 객체라고 정의
module.exports ={
    defaultNum,
    add,
    minus,
    multi,
    divide
//각각의 변수명의 이름 자체가 key가 되어 divide:divide 를 약어로 줄여서 divide 로 표현
}

//모듈만으로는 실행 불가하기때문에 실행 파일 있어야한다.
// export default{

// }