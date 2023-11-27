const express = require('express');
const app = express();

const getData = async()=>{
    return await fetch('db.json')
.then(res => res.json());
}

let db = getData();

//절대경로
app.get('/', (req, res)=>{
    res.send('Server Connect'); //사용자에게 응답을 보냄
});  //라우팅 등록

app.get('./posts', (req, res)=>{
    res.send(db['posts']);
})

app.listen(3000, ()=>{ // 3000이라는 포트 번호를 개방
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});  //서버를 동작 시키는 부분