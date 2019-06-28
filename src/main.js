import Vue from "vue"
import firebase from "firebase";
// Components
import "./components";

// Plugins
import "./plugins";

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBKKGINn-wJmQh8alNPg2ZjV99YLHt0JEQ",
  authDomain: "rakbuku-d19da.firebaseapp.com",
  databaseURL: "https://rakbuku-d19da.firebaseio.com",
  projectId: "rakbuku-d19da",
  storageBucket: "",
  messagingSenderId: "139010760637",
  appId: "1:139010760637:web:dcc10f4639d951bf"
};

firebase.initializeApp(firebaseConfig);

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from "./App";
import router from "@/router";
import store from "@/store";

// Sync store with router
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
