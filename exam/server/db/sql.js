module.exports = {
  boardList: `select * from t_board_board`,
  boardInfo: `select * from t_board_board where no=?`,
  boardInsert: `Insert Into t_board_board set ?`,
  boardUpdate: `Update t_board_board set ? where no=?`,
};
