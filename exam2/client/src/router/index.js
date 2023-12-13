import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import BookList from "../views/BookList.vue";
import BookInfo from "../views/BookInfo.vue";
import BookForm from "../views/BookForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/bookList",
    name: "bookList",
    component: BookList,
  },
  {
    path: "/bookInfo",
    name: "bookInfo",
    component: BookInfo,
  },
  {
    path: "/bookForm",
    name: "bookForm",
    component: BookForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
