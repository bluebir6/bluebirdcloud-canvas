import Vue from "vue";

import FancyLogger from "@/helpers/FancyLogger/FancyLogger.ts";
Vue.use(FancyLogger);
window.logger.log(
  "debug",
  "Importing Modules",
  [],
  "MAIN-17200",
  "main.ts"
);

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

window.logger.log(
  "debug",
  "Imported Modules",
  [],
  "MAIN-17200",
  "main.ts"
);

const socket = io("https://fjstap.glitch.me");

Vue.use(VueSocketIOExt, socket);
Vue.config.productionTip = false;

export const vm: Vue = new Vue({
  router,
  store: store.original,
  render: h => h(App),
  sockets: {
    connect() {
      console.log("socket connected");
    },
    info_packet(val) {
      console.log(val.currentUsers);
      this.$data.currentUsers = val.currentUsers
    }
  },
  data: {
    currentUsers: 0;
  }
}).$mount("#app");

window.logger.log(
  "debug",
  "Mounted to #app",
  [],
  "MAIN-17202",
  "main.ts"
);
