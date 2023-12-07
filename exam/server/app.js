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

app.listen(3000, () => {
  console.log("Server Start~~~", "http://localhost:3000");
});

//게시글 전체조회
app.get("/boards", async (req, res) => {
  let list = await mysql.query("boardList");
  res.send(list);
});
//게시글 단건조회
app.get("/boards/:no", async (req, res) => {
  let data = req.params.no;
  let list = await mysql.query("boardInfo", data);
  res.send(list[0]);
});
//게시글 등록
app.post("/boards", async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query("boardInsert", data);
  res.send(result);
});

//게시글 수정
app.put("/boards/:no", async (req, res) => {
  let datas = [req.body.param, req.params.no];
  let result = await mysql.query("boardUpdate", datas);
  res.send(result);
});
