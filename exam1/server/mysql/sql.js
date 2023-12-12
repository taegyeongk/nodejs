module.exports = {
  boardList: `SELECT b.no, b.title, b.writer, b.content, b.created_date, b.updated_date, COUNT(c.no)  as comment
                 FROM t_board_board b LEFT OUTER JOIN t_comment_board c
                                      ON b.no = c.bno                
                GROUP by b.no, b.title, b.writer, b.content, b.created_date, b.updated_date ORDER BY b.no`,
  boardInfo: `SELECT no, title, writer, content, created_date, updated_date, (SELECT COUNT(no) FROM t_comment_board WHERE bno = t_board_board.no) as comment
                FROM t_board_board
                WHERE no = ?`, // no = ?` : 1) object 타입 2) 단일값
  boardInsert: `INSERT INTO t_board_board SET ? `, //SET ? : 객체 : 특정 컬럼에 대한 명확한 값이 아님 현재
  boardUpdate: `UPDATE t_board_board SET ? WHERE no = ? `, // 기본 배열, 단일값 2개의 값이 필요함으로 배열타입이 선언되어야함
};
