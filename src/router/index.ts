import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import VueFeather from "vue-feather";

Vue.use(VueFeather);

Vue.use(VueRouter);

require("focus-visible");
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Loading...",
    redirect: "/edit"
  },
  {
    path: "/edit",
    name: "Editor",
    component: () => import(/* webpackChunkName: "editor" */ "@/views/Edit.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
