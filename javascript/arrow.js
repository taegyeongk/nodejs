//11-24 수업

//함수 선언식(외부 라이브러리에서 사용 가능 - 어디서든 선언 가능, 덮어쓰기가 가능하다)
function hello(name){
    return "Hello, " + name;
}

let arrHello = (name)=>{return "Hello, " + name;} //매개변수가 하나일 경우, 실행하는 리턴 코드가 하나 일 경우에는 괄호 생략이 가능하다
arrHello = name => "Hello, " + name;


//함수 표현식 (const 기반 형식이 많음 - 해당 함수가 사용되기 전에 위에서 선언이 되어야한다.)
const message = function (msg){
    return "msg : " + msg;
}

function hello(msg){
    return "msg, Hello : " + msg;
}

 //화살표 함수 내부에서는 this 를 사용하는 경우 사용 불가함. 함수 호출 방식에 따라 this에 바인딩 될 대상이 동적으로 결정됨.
 //전역 객체 window
let arrMessage = (msg)=> {return "msg : " + msg;} 
arrMessage = msg => "msg : " + msg;
arrMessage = () => {let today = new Date().getDay();
                    console.log("오늘날짜", today);
                    }

arrMessage();