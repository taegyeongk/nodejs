<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ bookInfo.no }}</td>
            <th scope="col" class="text-center table-primary">도서명</th>
            <td scope="col" class="text-center">{{ bookInfo.name }}</td>
            <th scope="col" class="text-center table-primary">저자</th>
            <td scope="col" class="text-center">{{ bookInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">출판사</th>
            <td colspan="4">{{ bookInfo.publisher }}</td>

            <th colspan="2" class="text-center table-primary">출판일자</th>
            <td colspan="4">{{ getDateFormat(bookInfo.publication_date) }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2" class="text-center table-primary">책 소개</th>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;border:none;background-color: white;"
                >{{ bookInfo.info }}
              </pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-success" @click="goToBookList">
                목록
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default{
data(){
    return{
        searchNo : '',
        bookInfo : {}
    };
},
created(){
    this.searchNo = this.$route.query.bookNo;
    this.getBookInfo();

},
methods : {
    async getBookInfo(){
        let result = await axios.get(`/api/books/${this.searchNo}`).catch(err => console.log(err));
        this.bookInfo = result.data;
    },
    getDateFormat(date){
            return this.$dateFormat(date);
    },
    goToBookList() {
            this.$router.push({path : '/bookList'});
    }
}


}
</script>
