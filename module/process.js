const process = require('process');
const os = require('os');
//process 는 import 나 require 혹은 사용을 안해도 크게 상관이없음. 가지고 오고자하는 환경변수를 부를때는 .key 대소문자 구분
console.log(process.env.JAVA_HOME);

//process와 달리 os의 경우 값을 함수로 호출한다.
console.log(os.cpus()); //cpus : cpu 코어 정보
console.log(os.tmpdir()); //tmpdir : 임시 저장 경로 확인

