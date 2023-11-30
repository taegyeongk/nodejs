const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//application/www-form-urlencoded
const defaultParser = express.urlencoded({extended : false});
//application/json
const jsonParser = express.json(); //별도의 호출없이 사용할 수 있음. json 을 가장 많이 parser 로 사용함. parser는 multipart는 할 수 없음.
//jsonParser 하는 이유는 res 받을때 content-type 으로 받아들이기때문에 json 으로 변경해줘야한다.

//경로 상관없이 동일 라우팅에 해당하는 경우 전체에 적용된다.
app.use(defaultParser);

app.post('/info', (req,res)=>{
    res.send('welcome, ' + req.body.name);
});

app.post('/message', jsonParser, (req,res)=>{  //일반적으로 사용하는 경로, 미들웨어는 원하는 갯수만큼 동작하게 할 수 있다.
    res.send('MSG:,' + req.body.message);
});

app.listen(5000, ()=>{
    console.log('server start!');
})

//express-session 객체를 기반으로 설정한다.
let sessionSetting = session({
    secret : 'secret key',  //session 의 key 값을 암호화
    resave : false, //새로 저장하는 부분에서 변경사항에 따라 다시 저장할지 말지 설정
    saveUninitialized : true,   //저장소에 강제로 값을 저장할것인지 말것인지
    cookie : {  //기본 id 값은 쿠키로 저장됨
        httpOnly : true, //자바스크립트에서 정보를 사용하지 못하도록 막고 통신상의 접근만 가능
        secure : false, //https 보안 프로토콜
        maxAge : 60000  //쿠키가 넘어가는 유효기간
    }
});

app.use(sessionSetting);

const corsOptions = {
    origin : 'http://192.168.0.51:5500', //localhost 로도 원래는 가능함. 안될경우 liveserver extension settings 에 내 ip주소 넣어주기
    optionsSuccessStatus : 200  //레거시 브라우저로 일반적으로 사용하지않는다.
}

app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.send(req.session);
});

app.post('/login', (req, res)=>{
    const {id, pwd} = req.body;
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err){  //save : 저장메소드
        if(err) throw err;
        res.redirect('/');  //error 가 아니라면 redirect 를 통해서 main 으로 실행하도록 넘어감.
    })
});

app.get('/logout', (req, res)=>{
    req.session.destroy(); //destroy : 종료 혹은 객체 삭제로 세션에 대한 일종의 정보를 삭제함
    req.redirect('/');
})

//express-server는 노드를 기준으로 해서 여는것. 본인 페이지가 없음.
//html 파일을 열려면 live server를 기준으로해서 열수있음.5500번을 기반으로 포트 개방. 페이지만 존재.
//live server 에서 express로 서버 요청을 해서 origin에 있는 cors를 확인해서 응답해줌.
