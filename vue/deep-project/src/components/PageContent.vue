<!-- 자식 컴포넌트 -->
<template>
  <table>
    <tr>
      {{
        $dataFormat("2023/12/05", "yyyy-MM-dd")
      }}
    </tr>

    <tr>
      <th>제목</th>
      <td>{{ title }}</td>
      <th>조회수</th>
      <td>{{ readInfo }}</td>
      <!-- 조회수는 누를때마다 1씩 오르게 -->
    </tr>
    <tr>
      <th>작성자</th>
      <td>{{ writer }}</td>
      <th>작성일자</th>
      <td>{{ regdate }}</td>
    </tr>
    <tr>
      <th>내용</th>
      <td>{{ content }}</td>
    </tr>
    <tr>
      <button @click="updateInfo">업데이트</button>
    </tr>
  </table>
</template>
<script>
//import AppMixin from "../mixin.js";

export default {
  //props: ["title", "count", "writer", "regdate", "content"], //info의 필드명
  //유효성 검사를 할 경우
  //mixins: [AppMixin],
  props: {
    title: String, //어떤 타입인지만 작성해주면 됨.
    count: {
      type: Number,
      default: 0,
    },
    writer: {
      type: [String, Object], //type 이 2가지가 허용이 될 경우 배열로 정의를 해주면 된다.
      default: function () {
        return { first: "Adward", second: "Ian" };
      },
    },
    regdate: {
      required: true,
      validator: function (value) {
        //yyyy-mm-dd
        let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/;
        return !(value.match(format) == null);
      },
    },
    content: String,
  },
  computed: {
    readInfo() {
      return this.count + 1;
    },
  },
  methods: {
    updateInfo() {
      //이벤트전달
      this.$emit("update-info", this.readInfo); //event 이름을 정할때는 html 생각해서 정한다. 대소문자 구분x
    },
  },
  watch: {
    readInfo() {
      //데이터전달
      this.$emit("update-info");
    },
  },
};
</script>
