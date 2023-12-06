require("dotenv").config({
  path: "./db/mysql.env",
});

const express = require("express");
const app = express();
const mysql = require("./db.js");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(express.static("dist")); //정적인 dist 허용

app.listen(3000, () => {
  console.log("Server Start!!");
});

app.get("/api", (req, res) => {
  res.sendFile("/dist/index.html");
}); //빌드해서 노드 파일로 열면 뷰가 실행됨. 단, 라우터에 /만 적어주면 경로가 맞지않음 뷰에서는 /api로 불러왔기때문에 api를 추가하거나 삭제해서 통일시켜줘야함. 프록시는 돌지않는다. 필요에 따라 빌드한 이름을 수정해줘야한다.--> 페이지는 열리는데 데이터를 불러오지 못하는 이유

//전체조회
app.get("/api/t_users", async (req, res) => {
  let list = await mysql.query("t_userList");
  res.send(list);
});

//단건조회
app.get("/api/t_users/:user_no", async (req, res) => {
  let data = req.params.user_no;
  let list = await mysql.query("t_userInfo", data);
  res.send(list[0]);
});

//정보 추가
app.post("/api/t_users", async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query("t_userInsert", data);
  res.send(result);
});

//정보 수정
app.put("/api/t_users/:user_no", async (req, res) => {
  let datas = [req.body.param, req.params.user_no];
  let result = await mysql.query("t_userUpdate", datas);
  res.send(result);
});

//정보삭제
app.delete("/api/t_users/:user_no", async (req, res) => {
  let data = req.params.user_no;
  let result = await mysql.query("t_userDelete", data);
  res.send(result);
});
