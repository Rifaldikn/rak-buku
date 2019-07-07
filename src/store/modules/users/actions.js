import firebase from "firebase/app";
import "firebase/auth";
import store from '@/store'

export default {
  createNewAccountWithEmail({ commit, dispatch }, userInfo) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(user => {
        dispatch("users/loginWithEmail", userInfo, { root: true });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        commit("app/setErrorMessage", errorMessage, { root: true });
        commit("app/toggleSnackbar", null, { root: true });
        console.log(error);
      });
  },
  loginWithEmail({ commit }, userInfo) {
    firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(user => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            let userData = {
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              photoURL: user.photoURL,
              isAnonymous: user.isAnonymous,
              uid: user.uid,
              providerData: user.providerData
            };
            // ...
            commit("app/setUser", userData, { root: true });
            // commit("app/setLoginStatus", null, { root: true });
            store.commit("app/setLoginStatus");

            console.log(userData);
          } else {
            // User is signed out.
            // ...
          }
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        commit("app/setErrorMessage", errorMessage, { root: true });
        console.log(error);
        // [END_EXCLUDE]
      });
    // [END authwithemail]
  },
  logoutUser({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        let data = null;
        commit("app/setUser", data, { root: true });
        store.commit("app/setLoginStatus");
      });
  }
};
