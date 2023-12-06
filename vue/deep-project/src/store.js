import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; //{} 안에 변수는 정해진 것을 사용해야하고, 단순 저장소를 불러오는 변수는 줄여도 상관없음.
const store = createStore({
  state() {
    return {
      cart: [
        {
          product_id: 1,
          product_name: "아이폰 거치대",
          category: "A",
        },
      ],
      count: 0,
    };
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addProduct(state, info) {
      state.cart.push(info);
    },
  }, //값을 변경하는 과정에서 동기식으로 변경
  //actions 에서 첫번째로 넘어오는 매개변수 : context -->store이라는 인스턴스 자체를 넘김. 현재 우리가 정의한 그 전체를 actions가 context로 넘긴다. 동일한 이름으로 mutation을 움직임
  actions: {
    addProduct(context, info) {
      setTimeout(() => {
        context.commit("addProduct", info);
      }, 1000);
    },
  },
  plugins: [
    createPersistedState({
      //createPersistedState : 저장소에서 날아가는것 방지.
      paths: ["cart"],
    }), //배열에 호출하는 방식으로 사용
  ],
});

export default store;
