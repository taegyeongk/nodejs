//믹스인은 기능을 따로 구현 후, 필요할때마다 컴포넌트와 결합하여 사용

export default {
  methods: {
    $dataFormat(value, format) {
      let today = new Date(value);
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);

      let result = format
        .replace("yyyy", year)
        .replace("MM", month)
        .replace("dd", day);
      return result;
    },
  },
  created() {
    console.log("컴포넌트 생성");
  },
  mounted() {
    console.log("DOM에 마운트");
  },
};
