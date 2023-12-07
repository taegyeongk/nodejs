<template>
  <div class="container">
    <table class="table">
      <caption>
        Total :
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>emp_no</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>hire_date</th>
          <th>dept_no</th>
          <th>dept_name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="idx"
          v-for="(emp, idx) in empList"
          @click="goToEmpInfo(emp.emp_no)"
        >
          <!-- :key="idx" 이렇게 안쓰면 문법적 오류 발생 -->
          <td>{{ emp.emp_no }}</td>
          <td>{{ emp.first_name }}</td>
          <!-- 합치고 싶을때 `${},${}` 로 작성 -->
          <td>{{ emp.last_name }}</td>
          <td>{{ $dateFormat(emp.hire_date, "yyyy년 MM월 dd일") }}</td>
          <td>{{ emp.dept_no }}</td>
          <td>{{ emp.dept_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      empList: [],
    };
  },
  computed: {
    count() {
      return this.empList.length;
    },
  },
  created() {
    this.getEmpList();
  },
  methods: {
    async getEmpList() {
      //http 가 없음으로 절대경로 proxy 를 사용하는 이유 : cors, changeOrigin 이 그 역할을 함. vue는 자체적으로 데이터를 가질수 없음. 절대경로는 localhost8080으로 연결되나 vue.config.js에서 3000으로 변환해줌.
      let result = await axios.get("/api/emps").catch((err) => {
        console.log(err);
      });
      let list = result.data;
      this.empList = list;
    },
    goToEmpInfo(no) {
      this.$router.push({ path: "/empInfo", query: { no: no } });
    },
  },
};
</script>
