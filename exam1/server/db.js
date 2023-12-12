let sql = require("./mysql/sql.js");

const dbInfo = {
  connetionLimit: process.env.MYSQL_LIMIT,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
};

const dbPool = require("mysql").createPool(dbInfo);

module.exports = {
  connection(alias, param = []) {
    // sql 쿼리문을 받는 변수 : sql[alias], sql에 물음표를 받는 매개변수 : param은 현재 app.js 에서 단건 조회를 받는 bno값
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias], param, (error, rows) => {
        if (error) {
          console.log(error);
          reject({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
