<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="no" v-model="bookInfo.no" readonly />

      <label for="name">도서명</label>
      <input type="text" id="name" v-model="bookInfo.name" />

      <label for="writer">저자</label>
      <input type="text" id="writer" v-model="bookInfo.writer" />
      <label for="publisher">출판사</label>
      <input type="text" id="publisher" v-model="bookInfo.publisher" />

      <label for="publication_date">출판일자</label>
      <input
        type="text"
        id="publication_date"
        v-model="bookInfo.publication_date"
      />

      <label for="content">소개</label>
      <textarea
        id="content"
        style="height:200px"
        v-model="bookInfo.info"
      ></textarea>

      <button type="button" class="btn btn-xs btn-info" @click="bookInsert()">
        저장
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default{
    data(){
        return {
            searchNo : '',
            bookInfo : {
                no : '',
                name : '',
                writer : '',
                publisher : '',
                publication_date : '',
                info : ''
            },
        }
    },
    created (){
        this.searchNo = this.$route.query.bookNo;
        if(this.searchNo > 0){
            this.getBookInfo();
        }else{
            this.bookInfo.publication_date = this.getToday();
        }
    },
    methods :{
        getToday(){
            return this.$dateFormat('');
        },
        async getBookInfo(){
            let result = await axios.get(`/api/books/${this.searchNo}`).catch(err => console.log(err));
            this.bookInfo = result.data;
            this.bookInfo.publication_date = this.$dateFormat(this.bookInfo.publication_date);
        },async bookInsert(){
            let obj = {
                param : {
                    name : this.bookInfo.name,
                    writer : this.bookInfo.writer,
                    publisher : this.bookInfo.publisher,
                    publication_date : this.bookInfo.publication_date,
                    info : this.bookInfo.info,
                }
            }
            let result = await axios.post(`/api/books`, obj).catch(err => console.log(err));
            if(result.data.insertId > 0){
                alert('등록되었습니다.');
                this.bookInfo.no = result.data.insertId;
            }else{
                alert('등록에 실패하였습니다.');
            }
        },

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
