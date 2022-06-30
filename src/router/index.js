import { createRouter, createWebHistory } from "vue-router";
import routesImport from "./routes";

const routes = routesImport;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title !== "undefined") {
    document.title = `${to.meta.title}`;
  }

  next();
});

export default router;
