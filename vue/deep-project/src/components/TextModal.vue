<template>
  <!-- slot 이 있는 경우에는 닫는 태그를 적어줘야한다. -->
  <Layout>
    <template v-slot:header>
      <h1>팝업 제목</h1>
    </template>
    <template v-slot:default>
      <p>팝업 컨텐츠 1</p>
      <p>팝업 컨텐츠 2</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </Layout>
</template>
<script>
import Layout from "./ModalLayout.vue"; //사용하고자 하는 모달 불러오기
export default {
  components: {
    Layout,
  },
};
</script>
