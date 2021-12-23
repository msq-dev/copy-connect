import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Spiel",
    component: () => import("../views/Game.vue"),
  },
  {
    path: "/rules",
    name: "Regeln",
    component: () => import("../views/Rules.vue"),
  },
  {
    path: "/settings",
    name: "Einstellungen",
    component: () => import("../views/Settings.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
