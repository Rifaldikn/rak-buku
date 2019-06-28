<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn light round color="#36F791" v-on="on">Sign Up</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline" primary-title>
        New to Rakbuku?
        <v-spacer></v-spacer>
        <button>
          <v-icon color="primary" x-large @click="dialog = false">cancel_presentation</v-icon>
        </button>
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="Email" label="Email" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="Password" label="Password*" type="password" required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center">
              <p>
                Dengan mendaftar, anda sudah menyetujui Syarat dan Ketentuan milik
                <span
                  color="primary"
                >Rakbuku</span>.
              </p>
              <p>
                Already have an account?
                <router-link to="/login">
                  <span style="color:#30DE82">
                    <strong>Log in</strong>
                  </span>
                </router-link>
              </p>
            </v-flex>
            <v-flex xs12>
              <div>
                <v-btn class="grey--text text--darken-4" depressed block color="primary" @click="signUp">Sign Up</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data(){
    return{
      Email:"",
      Password:"",
    }
  },
   methods:{
     signUp: function(){
       firebase.auth().createUserWithEmailAndPassword(this.Email, this.Password).then(
         function (user){
           alert("Account successfully created")
         },
         function (err){
           alert("Oops. " + err.message)
         }
       )
     }
  }
};
 
</script>
