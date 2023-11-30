const mysql = require('mysql');
const sql = require('./db/sql.js');



const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    post : process.env.MYSQL_POST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
}); //암호화 하지않고는 사용하지 않음.

//query() : 내가 사용하고자 하는 쿼리를 보내는 메소드
//pool.query('sql문', '값', '콜백함수')
 pool.query('sql문', '값', (err, results)=>{

 });

 //query : alias, values라는 2개의 매개변수를 가진 함수
//비동기가 아닌 외부 사용으로 동기방식 진행.
const query = async(alias, values) =>{
    return new Promise((resolve, reject) =>{
        return pool.query(sql[alias], values, (err, results)=>{ //alias : 지정한 key 값으로 필드를 지정한다.[] 쓰는 이유 : 객체를 기반으로 필드명을 원하는대로 넘겨주기 위해서, 받는 매개변수 마다 alias 대신 들어오는 값이 달라질 수있음.
            if(err) {
                console.log(err);
                reject({err});  //reject 에 에러 전송
            } else{
                resolve(results); //에러가 나지 않았다면 실제 데이터 전송.
            }
        })  
    })
}

// const getData = async() =>{
//     console.log(await query('customerList'));
// };

// getData();

module.exports = {
    query
}