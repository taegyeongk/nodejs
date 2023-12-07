<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">Emp_no.</th>
          <td class="text-center">{{ empInfo.emp_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">First_name</th>
          <td class="text-center">{{ empInfo.first_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">Last_name</th>
          <td class="text-center">{{ empInfo.last_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">gender</th>
          <td class="text-center">{{ empGender }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">Hire_date</th>
          <td class="text-center">
            {{ $dateFormat(empInfo.hire_date, "yyyy년 MM월 dd일") }}
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">salary</th>
          <td class="text-center">{{ empInfo.salary }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">dept_no</th>
          <td class="text-center">{{ empInfo.dept_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">dept_name</th>
          <td class="text-center">{{ empInfo.dept_name }}</td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="goToUpdate(empInfo.emp_no)">
        수정
      </button>
      <router-link to="/empList" class="btn btn-success">목록</router-link>
      <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">
        삭제
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchNo: "",
      empInfo: {},
    };
  },
  computed: {
    empGender() {
      return this.empInfo.gender == "M" ? "남" : "여";
    },
  },
  created() {
    this.searchNo = this.$route.query.no;
    this.getEmpInfo();
  },
  methods: {
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emps/${this.searchNo}`)
        .catch((err) => {
          console.log(err);
        });
      this.empInfo = result.data;
    },
    async deleteInfo(no) {
      let data = {
        param: {
          to_date: "2023-12-07",
        },
      };
      let result = await axios
        .delete(`/api/emps/${no}`, { data: data })
        .catch((err) => console.log(err));
      let count = result.data.affectedRows;
      if (count == 0) {
        alert("정상적으로 삭제되지 않았습니다.");
      } else {
        alert("정상적으로 삭제되었습니다.");
        this.$router.push({ name: "empList" });
      }
    },
    goToUpdate(no) {
      this.$router.push({ path: "/empForm", query: { no: no } });
    },
  },
};
</script>
