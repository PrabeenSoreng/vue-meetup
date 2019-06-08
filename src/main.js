import Vue from "vue";
import "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import * as firebase from "firebase";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDDAx_CSqa7z408QN4Vdj8w9hcrlDXpo9E",
      authDomain: "devmeetup-vue-42961.firebaseapp.com",
      databaseURL: "https://devmeetup-vue-42961.firebaseio.com",
      projectId: "devmeetup-vue-42961",
      storageBucket: "devmeetup-vue-42961.appspot.com",
      messagingSenderId: "1028432754076",
      appId: "1:1028432754076:web:b52855eb48e030ff"
    });
  }
}).$mount("#app");
