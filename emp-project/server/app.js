require("dotenv").config({
  path: "./db/mysql.env",
}); //환경변수 : 프로젝트 전반적으로 사용하겠다는 의미
const express = require("express");
const app = express(); //인스턴스생성
const mysql = require("./db.js");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("Server Start", "http://localhost:3000");
});

//전체조회
app.get("/emps", async (req, res) => {
  let list = await mysql.query("emp", "list");
  res.send(list); //send 가 실행되기전에 await 로 받아야함.
});

//단건조회
app.get("/emps/:no", async (req, res) => {
  let empNo = req.params.no; // --> no 로 받아오는 값을 sql.js에서 물음표 1개있는곳에 담아주기때문에 no라고 변수명을 정해줘도 emp_no에 들어가니 연결이된다.
  let info = await mysql.query("emp", "info", empNo);
  res.send(info);
});

const empTable = ["emp_no", "first_name", "last_name", "gender", "hire_date"];
const deptEmpTable = ["emp_no", "dept_no", "from_date", "to_date"]; //sql.js 순서와 해당 배열의 순서가 같아야함.
const salariesTable = ["emp_no", "salary", "from_date", "to_date"];

//정보추가
app.post("/emps", async (req, res) => {
  //아래 코드는 자바스크립트에서만 가능한 코드. 자바에서는 이미 필드가 지정되어있기때문에 가능할수없다.
  let empInfo = req.body.param;
  let empData = {}; //새로운 데이터를 변수에 아래 해당 컬럼에 value 값을 넣어줌.
  //'emp_no : empInfo.emp_no 로 해도되나 값을 수정하기 어려운 문제 발생
  for (let column of empTable) {
    //let colum = 'emp_no'
    let value = empInfo[column]; //let value = empInfo['emp_no']
    if (value == "") continue; //공백은 생략하지않으면 오류날 수 있음.
    empData[column] = value; //empData['emp_no']
  }
  console.log(empData);
  let result = await mysql.query("emp", "insert", empData);

  let deptEmpData = [];
  for (let column of deptEmpTable) {
    let value = empInfo[column];
    if (value == "") continue;
    deptEmpData.push(value); //push는 배열
  }
  console.log(deptEmpData);
  result = await mysql.query("empDept", "insert", deptEmpData);

  let salData = {};
  for (let column of salariesTable) {
    let value = empInfo[column];
    if (value == "") continue;
    salData[column] = value;
  }
  console.log(salData);
  salData.to_date = "9999-01-01";
  result = await mysql.query("sal", "insert", salData);

  res.send(result); //결과를 전송하여 통신하겠다는 의미. 만약에 돌려줄게 없을 경우 send 가 아닌 res.end() 로 사용해야한다.
});

//정보수정
app.put("/emps/:no", async (req, res) => {
  let data = [req.body.param, req.params.no];
  let result = await mysql.query("emp", "update", data);
  console.log(data);
  res.send(result);
});

//정보삭제
app.delete("/emps/:no", async (req, res) => {
  //delete 는 get 방식의 확장의 개념으로 body를 가지고있지 않음. 다만 express, 플라스크, 장고와 같은 프레임워크 일부는 허용함.화면에서 빠진다는것은 delete 라는 기능이 정해져있는 것을 사용하기때문
  //사용자의 퇴사날짜인 날을 지정, 오늘 날짜를 퇴사날짜로 지정하는 2가지에서는 허용해야한다.
  let data = [req.body.param.to_date, req.params.no];
  let result = await mysql.query("empDept", "update", data);
  console.log(data);
  res.send(result);
});
