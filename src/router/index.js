import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const Movies = () => import("../views/Movies.vue");
const Detail = () => import("../views/Detail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/movies",
    name: "movies",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载，防止最后打包的js文件过大，有利于首次请求
    component: Movies
  },
  {
    path: "/detail/:id",
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "el-button--primary"
});

export default router;
