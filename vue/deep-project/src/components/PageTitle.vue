<template>
  <h2>{{ title }}</h2>
</template>
<script>
//PageTitle.vue  : 자식 컴포넌트
export default {
  props: ["title"], //props : 기본 배열형태, 유효성 검사를 하지않고 정해진 데이터 그대로 사용하는 가장 기본방식
};
// : 부모 컴포넌트
</script>
