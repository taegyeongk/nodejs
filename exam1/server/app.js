require("dotenv").config({ path: "./mysql/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

const db = require("./db.js");
//전체조회
app.get("/boards", async (request, res) => {
  res.send(await db.connection("boardList"));
});
//단건조회
//request.params : header 속성을 가져옴. 단일값을 원함으로 경로에 붙여서 받음 :bno 에서 세미콜론은 값을 담는의미. 콜론 뒤에 값을 담을 변수가옴
//request.body : get,delete 는 통신을 할 때 body가 존재하지 않고 header(보안이 되지않음) 부분에 모든 정보가 존재한다. post, put은 body 속성이 무조건 존재한다.(json 방식은 body에서 사용)
app.get("/boards/:bno", async (request, res) => {
  res.send((await db.connection("boardInfo", request.params.bno))[0]);
});

//등록 : REST API 기준
app.post("/boards", async (req, res) => {
  let data = req.body.param; // data : 객체타입으로 set 절에 명확하게 정의하지 않았던 값들을 담아서 전달.
  res.send(await db.connection("boardInsert", data));
});

// 수정 : put
app.put("/boards/:bno", async (req, res) => {
  // data : 객체타입으로 set 절에 명확하게 정의하지 않았던 값들을 담아서 전달.
  // body안에 객체 타입, 단일값 두가지를 넘겨야하기때문에 배열로 받아서 담아준다.
  let data = [req.body.param, req.params.bno];
  res.send(await db.connection("boardUpdate", data));
});
