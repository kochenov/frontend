import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "@/router";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
// Импорт иконок
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

createApp(App)
  .use(router)
  .use(pinia)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
