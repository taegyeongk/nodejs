let emp = {
  //promise 안에서 table : let 에 담은 변수, dml : 변수 안에서 실행할 작업, params : 받아오는 값)
  list: `select e.emp_no, e.first_name, e.last_name, e.gender, e.hire_date, s.salary,
  d.dept_no, d.dept_name
  from employees e join dept_emp h on(  e.emp_no = h.emp_no)
  join departments d on(h.dept_no = d.dept_no)
  join salaries s on (e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  order by e.emp_no desc limit 0,10`,
  info: `select e.emp_no, e.first_name, e.last_name, e.gender, e.hire_date, s.salary,
  d.dept_no, d.dept_name
  from employees e join dept_emp h on(  e.emp_no = h.emp_no)
  join departments d on(h.dept_no = d.dept_no)
  join salaries s on (e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  and e.emp_no =?`,
  insert: `insert into employees set ?`, //set 형태의 물음표에는 컬럼명까지 같이 객체 정보가 넘어와야한다.(무조건적이지는 않음)
  update: `update employees set ? where emp_no=?`, //넘길때 물음표 개수가 중요. 컬럼이 명확하지 않은 경우에는 첫번째 물음표에는 object이나 두번째에는 어디에 넘기는지가 명확하기때문에 배열 값.
};
let dept = {
  list: `select dept_no, dept_name from departments order by dept_no`,
};
let empDept = {
  insert: `insert into dept_emp set emp_no=?, dept_no =?, from_date=?, to_date = cast('9999-01-01' as date)`, //set절에 어떤 정보를 넣을지가 명확하기때문에 객체를 넘길 필요가 없으며 배열로 최소한 물음표 개수 이상을 넘겨야한다.
  update: `update dept_emp set to_date=? where emp_no=?`, //2가지 다 넘기는 곳이 명확하기떄문에 오브젝트
};
let sal = {
  insert: `insert into salaries set ?`, //empDept 와 똑같이 to_date 값을 넘겨야하는데 set절에 명시되어있지 않기때문에 같은 이름의 변수를 사용해서 값을 직접 넣어줘야한다.
};

module.exports = {
  emp,
  empDept,
  dept,
  sal,
  // empInsert: `
  // insert into dept_emp set emp_no=?, dept_no =?, from_date=?, to_date = cast('9999-01-01' as date)
  // insert into salaries set emp_no=?, salary =?, from_date=?, to_date = cast('9999-01-01' as date)`,
  // empUpdate: `update employees set ? where no=?`,
  // empDelete: `delete from employees where no=?`,
  // empList: ``,
  // empInfo: `select e.emp_no, e.first_name, e.last_name, e.gender, e.hire_date, s.salary,
  // d.dept_no, d.dept_name
  // from employees e join dept_emp h on(  e.emp_no = h.emp_no)
  // join departments d on(h.dept_no = d.dept_no)
  // join salaries s on (e.emp_no = s.emp_no)
  // where h.to_date = cast('9999-01-01' as date)
  // and s.to_date = cast('9999-01-01' as date)
  // and e.emp_no =?`,
};
