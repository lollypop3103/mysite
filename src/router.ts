import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "CheersBeer" }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: { title: "About - CheersBeer" }
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: () => import("./components/BlogTemp.vue"),
      meta: { title: "Blog - CheersBeer" }
    }
    /*
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    }*/
  ]
});

const DEFAULT_TITLE = "CheersBeer";
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
