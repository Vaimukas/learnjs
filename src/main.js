import { createApp } from "vue";
import { createMemoryHistory, createWebHashHistory, createRouter } from "vue-router";

import Modals from "./pages/Modals.vue";
import ToDo from "./pages/ToDo.vue";

const routes = [
  { path: "/", component: ToDo },
  { path: "/modals", component: Modals },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import App from "./App.vue";

createApp(App).use(router).mount("#app");
