const mysql = require('mysql');
const sql = require('./db/sql.js');
const { query } = require('express');

const pool = mysql.createPool({
    host : `localhost`,
    post : 3306,
    user : `dev`,
    password : `1234`,
    database : `dev`,
    connectionLimit : 10
})

//query() : 내가 사용하고자 하는 쿼리를 보내는 메소드
//pool.query('sql문', '값', '콜백함수')
pool.query('sql문', '값', (err, results)=>{

})

//비동기가 아닌 외부 사용으로 동기방식 진행.
const query = async(alias, values) =>{
    return new Promise((resolve, reject) =>{
        return pool.query(sql[alias], values, (err, results)=>{ //alias : 지정한 key 값으로 필드를 지정한다.
            if(err) {
                console.log(err);
                reject({err});  //reject 에 에러 전송
            } else{
                resolve(results); //에러가 나지 않았다면 실제 데이터 전송.
            }
        })  
    })
}
