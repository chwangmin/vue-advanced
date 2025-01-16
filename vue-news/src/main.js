import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index"; // store를 default export로 가져옴

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
