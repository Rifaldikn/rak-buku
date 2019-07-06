import firebase from "firebase/app";
import "firebase/auth";

export default {
  createNewAccountWithEmail({ commit }, userInfo) {
    // return new Promises((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log({ errorCode, errorMessage });
      });
  },
  loginWithEmail({ commit }, userInfo) {
    firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }
};
