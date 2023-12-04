module.exports = {
    t_userList : `select * from t_users`,
    t_userInfo : `select * from t_users where user_id=?`,
    t_userInsert : `INSERT INTO t_users SET ?`,
    t_userUpdate : `Update t_users SET ? WHERE user_id=?`,
    t_userDelete : `DELETE from t_users WHERE user_id=?`
}