import { createApp } from "vue";
import App from "./App.vue";
import mixin from "./mixin.js";
import store from "./store.js";

createApp(App)
  .use(store)
  .mixin(mixin)
  .directive("focus", {
    mounted(el, binding, vnode, prevVNode) {
      console.log("mounted", el, binding, vnode, prevVNode);
      if (binding.value) {
        el.focus();
      }
    },
    updated(el, binding, vnode, prevVNode) {
      console.log("updated", el, binding, vnode, prevVNode);
      if (binding.value) {
        el.style.color = "violet";
      } else {
        el.style.color = "black";
      }
    },
  })
  .mount("#app"); //#은 id 태그로 index.html 내부에 태그와 연결되어있다.연결되지 않을 경우 돔과 연결도 불가
