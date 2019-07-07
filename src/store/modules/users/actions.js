import firebase from "firebase/app";
import "firebase/auth";

export default {
  createNewAccountWithEmail({ commit }, userInfo) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log({ errorCode, errorMessage });
        // commit(setErrorMessage(errorMessage));
        commit("app/setErrorMessage", errorMessage, { root: true });
        commit("app/toggleSnackbar", null, { root: true });
      });
  },
  loginWithEmail({ commit }, userInfo) {
    firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log({ errorCode, errorMessage });
      });
  }
};
