require('dotenv').config({
    path: './db/mysql.env'
});


const express = require('express');
const app = express();
const mysql = require('./db.js');


app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log('Server Start!!');
});

//전체조회
app.get('/t_users', async (req, res) => {
    let list = await mysql.query('t_userList');
    res.send(list);
});

//단건조회
app.get('/t_users/:user_no', async (req, res) => {
    let data = req.params.user_no;
    let list = await mysql.query('t_userInfo', data);
    res.send(list[0]);
});

//정보 추가
app.post('/t_users', async (req, res) => {
    let data = req.body.param;
    let result = await mysql.query('t_userInsert', data);
    res.send(result);
});

//정보 수정
app.put('/t_users/:user_no', async (req, res) => {
    let datas = [req.body.param, req.params.user_no];
    let result = await mysql.query('t_userUpdate', datas);
    res.send(result);
});

//정보삭제
app.delete('/t_users/:user_no', async (req, res) => {
    let data = req.params.user_no;
    let result = await mysql.query('t_userDelete', data);
    res.send(result);
});