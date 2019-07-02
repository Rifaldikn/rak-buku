
export default {
  createNewAccount({ commit }, userInfo) {
    // return new Promises((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console({errorCode, errorMessage})
        });
    // }).catch(error => {
    //   reject(error);
    // });
  }
};
