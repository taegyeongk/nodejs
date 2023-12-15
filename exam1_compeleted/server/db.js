let sql = require('./mysql/sql.js');

const dbInfo = {
    connetionLimit : process.env.MYSQL_LIMIT,
    host : process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database : process.env.MYSQL_DATABASE,    
    user : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD
}

const dbPool = require('mysql').createPool(dbInfo);

module.exports = {
     connection(alias, param = []) {
      return new Promise((resolve, reject) => dbPool.query(sql[alias], param, (error, rows) => {
        if (error) {      
          console.log(error);   
          reject({
            error
          });
        } else resolve(rows);
      }));
    }
  };