import { createStore } from "vuex";

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
  //   actions: {
  //     addProduct(state, info){

  //     }
  //   },
});

export default store;
