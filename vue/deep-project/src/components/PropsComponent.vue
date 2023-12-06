<!-- 자식컴포넌트-->
<template>
  <div>
    <PageTitle title="Hello, world" />
    <!-- 부모컴포넌트에서 가지고 오지 않을 경우 /사용 -->
    <!-- 자바스크립트 안에서 : 사용할려면 홑따옴표가 와야함 -->
    <!-- <PageContent
      :title="header"
      v-bind:count="10"
      :writer="['Adward']"
      :regdate="'2023-12-05'"
      :content="{ first: 'Node.js', second: 'Vue.js' }"
    /> -->
    <!-- v-bind: 를 사용해줘야 특정데이터 타입을 넘겨줄수있음. 위에서는 문자열을 숫자로 변경 -->
    <PageContent v-bind="info" @update-info="handler" />
    <RefComponent ref="child" />
    <button @click="childHandler">자식 제어</button>
  </div>
</template>
<script>
//PropsComponent.vue
import PageTitle from "./PageTitle.vue";
import PageContent from "./PageContent.vue";
import RefComponent from "./RefComponent.vue";

export default {
  data() {
    return {
      header: "",
      info: {
        title: "Today is",
        count: "",
        writer: "Adward",
        regdate: "2023-12-05",
        content: "내용없음",
      }, //객체형태로 자식 컴포넌트를 작성하면 한꺼번에 넘길 수 있어 편리함
    };
  },
  components: {
    PageTitle,
    PageContent,
    RefComponent,
  },
  methods: {
    handler(value) {
      alert(value);
    },
    childHandler() {
      //this.$refs.child.content = "부모가 보내는 데이터";
      //this.$refs.child.plusCount();
      this.$refs.child.$refs.cBtn.click();
    },
  },
};
</script>
