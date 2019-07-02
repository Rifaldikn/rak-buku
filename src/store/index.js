/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Store functionality
import actions from "./actions";
import getters from "./getters";
import modules from "./modules";
import mutations from "./mutations";
import state from "./state";

Vue.use(Vuex);

// Create a new store
const store = new Vuex.Store({
  actions,
  getters,
  modules,
  mutations,
  state
});

export default store;
