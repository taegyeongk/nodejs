const path = require('path');

console.log('== 절대경로');
console.log('__filename');
console.log('__dirname');
console.log(path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : ', path.extname(__filename));  //확장자 정보 필요할 경우 extname

let pathList = process.env.PATH.split(path.delimiter); //path 가 가진 변수를 기준으로 잘라냄.
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep)); //실제 경로는 sep 가 가지고있음.


