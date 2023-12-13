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

// 라우팅 생성
// 전체조회
app.get("/books", async (req, res) => {
  res.send(await db.connection("bookList"));
});
// 단건조회
app.get("/books/:bno", async (req, res) => {
  res.send((await db.connection("bookInfo", req.params.bno))[0]);
});
// 등록
app.post("/books", async (req, res) => {
  let data = req.body.param;
  res.send(await db.connection("bookInsert", data));
});
