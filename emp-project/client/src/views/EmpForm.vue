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
      <button class="btn btn-success" @click="updateInfo">저장</button>
      <router-link to="/" class="btn btn-info">목록</router-link>
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
      let newDate = this.dateFormat(this.empInfo.hire_date, "yyyy-MM-dd");
      this.empInfo.hire_date = newDate;
    },
    dateFormat(value, format) {
      //yyyy-MM-dd
      let date = new Date(value);
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      let result = format
        .replace("yyyy", year)
        .replace("MM", month)
        .replace("dd", day);
      return result;
    },
    async updateInfo() {
      if (!this.validation()) return; //논리 강제변환
      let data = {
        param: this.empInfo, //가지고있는 데이터를 전체 넣어줌.readonly 사용해서 가능.잘못하면 다른 아이디가 수정될 수 있음.
      };

      let result = await axios
        .put(`/api/t_users/${this.empInfo.emp_no}`, data)
        .catch((err) => console.log(err));

      console.log(result.data);
      if (result.data.chagedRows == 0) {
        alert(
          `수정되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`
        );
      } else {
        alert(`정상적으로 수정되었습니다.\n`);
        //수정된 화면과 수정하는 화면이 같기때문에 따로 페이징은 하지않는다.
      }
    },
    getToday() {
      let today = new Date();
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
