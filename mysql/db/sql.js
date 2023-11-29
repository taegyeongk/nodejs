module.exports = {
    customerList : `select * from customers`,  //세미콜론 빼야함!!
    customerInsert : `INSERT INTO customers SET ?`, //insert into values 기반
    customerUpdate : `UPDATE customers SET ? WHERE id=?`,  //뒤에오는 set 절은 어떤것이냐에 따라 객체타입이 달라질 수 있음. 물음표 하나에 객체가 움직임.
    customerDelete : `DELETE FROM customers WHERE id=?`,
    customerInfo : `select * from customers WHERE id=?`
}