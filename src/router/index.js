import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    // 路由懒加载，一次请求的js太大
    component: () => import("../views/Home.vue")
  },
  {
    path: "/movies",
    name: "movies",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Movies.vue")
  },
  {
    path: "/detail/:id",
    component: () => import("../views/Detail.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "el-button--primary"
});

export default router;
