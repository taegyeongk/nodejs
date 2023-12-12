<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="no" v-model="boardInfo.no" readonly />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="boardInfo.title" />

      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="boardInfo.writer" />

      <label for="content">내용</label>
      <textarea
        id="content"
        style="height:200px"
        v-model="boardInfo.content"
      ></textarea>

      <label for="regdate">작성일자</label>
      <input type="text" id="regdate" v-model="boardInfo.created_date" />

      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="isUpdated ? boardUpdate() : boardInsert()"
      >
        저장
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {
                no : '',
                title : '',
                writer : '',
                content : '',
                created_date : ''
            },
            //저장 버튼이 함수 2개를 실행해야할 경우에 사용해줘야한다. 수정일떄 true , 등록일때 false
            isUpdated : false
        };
    },
    created() {
        // 수정 불러오는 값을 searchNo 에 담아줘야함
        this.searchNo = this.$route.query.boardNo;
        if(this.searchNo > 0){
                //수정이 진행  boardNo 가 존재하기때문에 수정, 진행되면 getBoardInfo 를 다시 한 번 호출해줘야한다.
                //수정에서는 항상 날짜 포맷을 주의해야한다. 날짜를 받아와서 다시 보낼때 포맷이 중요
                this.getBoardInfo();
                //삼항연산자를 이용해서 조건을 정해줌
                this.isUpdated = true;
            }else{
                // 등록이 진행 boardNo 가 존재하지 않기때문에 등록
            //페이지를 열자마자 자동으로 생성되어야 하는 작성일자
                this.boardInfo.created_date = this.getToday();
        }
    },
    methods: {
        async getBoardInfo() {
            let result = await axios.get(`/api/boards/${this.searchNo}`).catch(err => console.log(err));
            this.boardInfo = result.data;
            //날짜 포맷을 상단 if문이 아닌 boardInfo에서 값 자체를 보내고 기존 값을 덮어씌워야 하기때문에 다시  변경해줘야한다.
            this.boardInfo.created_date = this.$dateFormat(this.boardInfo.created_date);
        },
        getToday(){
            return this.$dateFormat('');
        },
        async boardInsert(){
            //post 가 body 에 넘기려면 다른 매개변수가 있어야함 : obj
            let obj = {
                param : { //직접 작성해서 넘길 수 없으니 값을 끄집어내야한다.
                    title : this.boardInfo.title,
                    writer : this.boardInfo.writer,
                    content : this.boardInfo.content,
                    created_date : this.boardInfo.created_date
                }
            }
            let result = await axios.post(`/api/boards`, obj).catch(err => console.log(err));
            // 오토인크리먼트 속성을 사용하고 나면 후속처리
            if(result.data.insertId > 0){
                alert('등록되었습니다.');
                //insertId : 비어있는 no 항목에 서버측에서 자동 생성된 pk 를 프로퍼티의 no에 넣음.
                this.boardInfo.no = result.data.insertId;
                this.$router.push({ path : '/list'});
            }else{
                alert('등록에 실패하였습니다.');
            }
        },
        async boardUpdate(){ //등록이랑 같음
            let obj = {
                param : {
                    title : this.boardInfo.title,
                    writer : this.boardInfo.writer,
                    content : this.boardInfo.content,
                    created_date : this.boardInfo.created_date
                }
            }
            // 특수문자는 웬만하면 경로로 변경하지않는다.
            let result = await axios.put(`/api/boards/${this.boardInfo.no}`, obj).catch(err => console.log(err));
            if(result.data.changedRows > 0){
                alert('수정되었습니다.');
            }else{
                alert('수정에 실패하였습니다.');
            }
        }
    }
}
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type=button] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type=button]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
