import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Post from "./views/Post.vue";

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
      path: "/works/",
      name: "works",
      component: () => import("./components/Portfolio.vue"),
      meta: { title: "Works - CheersBeer" }
    },
    {
      path: "/blog",
      name: "blog-home",
      component: () => import("./components/BlogHome.vue"),
      meta: { title: "Blog - CheersBeer" }
    },
    {
      path: "/blog/:uid",
      name: "post",
      component: Post,
      meta: { title: "Blog - CheersBeer" }
    },
    {
      path: "/not-found",
      name: "not-found",
      component: NotFound
    },
    {
      path: "/contact/",
      name: "contact",
      component: () => import("./components/Contact.vue"),
      meta: { title: "Contact - CheersBeer" }
    },
    {
      path: "/privacy-policy",
      name: "privacy policy",
      component: () => import("./components/PrivacyPolicy.vue"),
      meta: { title: "Privacy Policy - CheersBeer" }
    }
  ]
});

const DEFAULT_TITLE = "CheersBeer";
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
