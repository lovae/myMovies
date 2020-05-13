import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "../views/Movies.vue";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

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
    component: Movies
  },
  {
    path: "/detail/:id",
    component: Detail
  }
];

const router = new VueRouter({
  routes
});

export default router;
