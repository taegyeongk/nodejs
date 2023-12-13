module.exports = {
  bookList: `select * from t_book_board`,
  bookInfo: `SELECT * FROM t_book_board WHERE no=?`,
  bookInsert: `Insert Into t_book_board set ?`,
};
