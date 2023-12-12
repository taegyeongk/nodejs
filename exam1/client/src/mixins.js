//date format은 하이픈을 기반으로 다른 포맷을 막음.

export default {
  methods: {
    $dateFormat(val) {
      //val == "" ? : 공백이 있을 경우에 새로운 날짜를 받아와서 생성해줌
      let date = val == "" ? new Date() : new Date(val);
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);

      return `${year}-${month}-${day}`;
    },
  },
};
