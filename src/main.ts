import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Main from "./views/Main.vue";
import Match from "./views/Match.vue";
import Winner from "./views/Winner.vue"

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/match",
    component: Match,
  },
  {
    path: "/winner",
    component: Winner,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
