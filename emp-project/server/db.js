const mysql = require("mysql"); //mysql 불러오기
const sql = require("./db/sql.js");

const dbpool = mysql.createPool({
  connectionLimit: process.env.MYSQL_LIMIT,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
});

const query = async (table, dml, params) => {
  //alias, values로 해도됨 구조때문에 변경하는것.
  //promise 안에서 table : let 에 담은 변수, dml : 변수 안에서 실행할 작업, params : 받아오는 값)
  return new Promise((resolve, reject) => {
    //return 안에서 return 은 큰 의미가 없음
    dbpool.query(sql[table][dml], params, (error, rows) => {
      if (error) {
        reject({
          error,
        });
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = {
  query,
};
