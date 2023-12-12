<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.no }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ getDateFormat(boardInfo.created_date) }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;border:none;background-color: white;"
                >{{ boardInfo.content }}
              </pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <!-- goToUpdateForm(boardInfo.no) : 안에 매개변수로 명시를 하지 않는다면 이벤트객체를 불러옴 -->
              <button
                class="btn btn-xs btn-info"
                @click="goToUpdateForm(boardInfo.no)"
              >
                수정
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {}
        };
    },
    created() {
        //boardNo : 대소문자를 가림, boardlist 에서 router query 에서 보낸 key 값을 그대로 받아옴
        this.searchNo = this.$route.query.boardNo;
        this.getBoardInfo();
    },
    methods: {
        async getBoardInfo() {  //axios를 사용해서 서버와 통신해서 데이터를 가져옴
        //app.get("/boards/:bno" 경로가 그대로 불려옴 대신 `` : 백팁 사용, :bno 이 부분은 직접 채워야한다. searchNo 에 boardNo 값을 담았기때문에 불러주면됨
            let result = await axios.get(`/api/boards/${this.searchNo}`).catch(err => console.log(err));
            this.boardInfo = result.data;

        },
        getDateFormat(date) {
            return this.$dateFormat(date);
        },
        goToUpdateForm(no) {
            //페이지가 바뀌어야하고 페이지가 바뀌면 서버와 연결이 되어야함. 따라서 vue 내부에서 페이지가 바뀌는 코드는 axios 를 사용하지 않는다.
            //query : 전달되어야 하는 속성
            this.$router.push({path : '/form', query : { boardNo : no }});
        }
    }
}
</script>
