import firebase from "firebase/app";
var db = firebase.firestore();
import store from "@/store";

export default {
  addNewBook({ dispatch }, bookInfo) {
    let userData = store.getters["app/userData"];
    console.log("userid" + userData.uid);
    db.collection("books")
      .doc(userData.uid)
      .collection(bookInfo.serialNumberBook)
      .doc("bookDetail")
      .set(bookInfo)
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  },
  getBookList({ commit }) {
    db.collection("books")
      .get()
      .then(querySnapshot => {
        let allBooksData = [];
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
          // allBooksData.push(doc.data())
          // store.commit("LOAD_dessert")
        });
      });
  }
};
