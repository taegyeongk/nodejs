//filesystem 의 약어 파일 읽기, 쓰기 등을 흘 수 있는 내장 모듈
const fs = require('fs');

//Console 클래스 사용할 경우 대문자 C 사용
const {Console} = require('console');


const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout : output, stderr : errorOutput });
const count = 5;
logger.log('count : %d', count);
logger.error('count : ' + count);

