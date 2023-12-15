<template>
  <div class="card">
    <div class="card-header">댓글목록</div>
    <div class="card-body">
      <ul class="list-group">
        <li
          class="list-group-item"
          :key="idx"
          v-for="(comment, idx) in commentList"
        >
          <div class="container">
            <div class="row text-start">
              {{ comment.content }}
            </div>
            <div class="row">
              <div class="col-9 text-end">
                {{ comment.writer }}
              </div>
              <div class="col-3 text-center">
                {{ comment.created_date }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

//CommentList.vue
export default{
  props : ['bno'],  // 라우터로 동작x 부모 컴포넌트를 기반으로 받아옴.
  data (){
    return {
      commentList : []
    }
  },
  created() {
        this.getCommentList();
  },

  methods : {
      async getCommentList(){
        //console.log(this.bno);
        let result = await axios.get(`/api/comments?bno=${this.bno}`).catch(err => console.log(err));
        //console.log(result.data);
        this.commentList = result.data;

      }
  },
}
</script>
