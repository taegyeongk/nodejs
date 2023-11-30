//환경변수 등록. env는 변수를 사용하지않음
require('dotenv').config({ path : './db/mysql.env'});

const express = require('express');
const app = express();
const mysql = require('./db.js');

//jsonparser 기반
app.use(express.json({
    limit : '50mb'
}));

app.listen(3000,()=>{
    console.log('Server Start!')
});

app.get('/customers', async (req, res)=>{
    let list = await mysql.query('customerList');  //sql.js 에서 작성한 쿼리문을 사용
    res.send(list);
});

app.post('/customers', async(req, res)=> {
    let data = req.body.param;  //param 이라는 객체로 데이터값을 받아서 data에 넘겨줌.
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});

app.put('/customers/:id', async(req, res)=>{
    let datas = [req.body.param, req.params.id]; //sql 에서 물음표 사용한 갯수만큼 필요하기때문에 배열이 옴. 첫번째는 객체타입, 두번째는 컬럼에 오는 값
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
});

app.delete('/customers/:id', async(req, res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});

//단건조회
app.get('/customers/:id', async(req, res)=>{
    let data = req.params.id;
    let list = await mysql.query('customerInfo', data);
    res.send(list[0]);  //조회하고자 하는 데이터가 배열중에서 1개 임으로 list[0] 으로 적어주며, 그렇지 않을 경우에는 서버쪽에서 오류가 날 수있음.
});