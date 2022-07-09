import { createRouter, createWebHistory } from "vue-router";
import { authenticated } from "@/middleware";

import routesImport from "./routes";

const routes = routesImport;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //let parent = routes.find((value) => value.name === to.meta.parent);
  if (typeof to.meta.title !== "undefined") {
    document.title = `${to.meta.title}`;
  }
  next();
});

// use middleware to check auth
router.beforeEach(authenticated);

export default router;
