const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');
const app = express();

//부여되는 라우터의 도메인을 적어줘야한다.
app.use('/user', userRouter);

//정적 메소드
app.use('/public', express.static('images'));
app.use(function(err, req, res, next){
    res.status(500).json({statusCode : res.statusCode, errMessage : err.message});
});

app.get('/error', (req, res, next)=>{
    next(new Error('Process Fail, Check Data !'));
});
//에러는 사용자에게 배포시 절대 보이면 안된다.


//fs 사용할 경우 무조건 동기방식으로 해야한다.
const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);
//일종의 sql 에서 select 문과 동일하게 사용
const getData = (target, where) => {  //target : key 값, where : 배열 안에서 특정한 값을 받는 대상의 정보
    let data = jsonData[target]; //profile 은 배열이 아니기때문에 if 에서 걸러줘야함.
    if (Array.isArray(data)){  //isArray : 배열이 맞는지 확인하는 메소드로 객체가 배열이면 true, 배열이 아니면 false를 리턴, typeof는 배열을 obj로 보기때문에 올 수 없다.
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
        return data;
}

//절대경로
app.get('/', (req, res) => {
    res.send('Server Connect'); //사용자에게 응답을 보냄
}); //라우팅 등록

//전체조회
app.get('/posts', (req, res)=>{  
    let data = getData('posts');
    res.send(data);
});

//단건조회
app.get('/posts/:id',(req, res)=>{
    let data = getData('posts', req.params.id); //req의 body 외 데이터를 가지고 올 때는 뒤에 params 붙여서 변수의 값을 가지고온다.
    res.send(data);
}) //쿼리스트링이 아니기때문에 뒤에 콜론이 오고 무슨 변수로 받겠다는 해당 경로에 붙어있는 값이 옴

app.get('/commets',(req, res)=>{
    let data = getData('commets');
    res.send(data);
})
app.get('/commets/:id',(req, res)=>{
    let data = getData('commets', req.params.id);
    res.send(data);
})

app.get('/profile', (req, res)=>{
    let data = getData('profile');
    res.send(data);
})
//동일한 url 경로라고하더라고 get,put,post,delete 메소드를 다르게 사용하면 요청은 다르게 할 수 있다.
//매번 이 방식을 사용권장하지는 않음.
//단건조회, 삭제는 같은 형태기때문에 하나의 경로에 대해 4개를 동시에 사용하지는 않는다. 2가지정도 같이 사용.
app.route('/emps')
.get((req, res)=>{
    res.send('사원 전체 조회');
})
.post((req, res)=>{
    res.send('사원 등록');
})
.put((req, res)=>{
    res.send('사원 수정');
})
.delete((req, res)=>{
    res.send('사원 삭제');
})

app.listen(3000, () => { // 3000이라는 포트 번호를 개방
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
}); //서버를 동작 시키는 부분