<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#1B1A18" dark app fixed flat>
    <v-toolbar-title style="width: 400px; color:#30DE82" class="ml-0 pl-3">
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon -->
      <v-toolbar-side-icon dark medium @click.stop="onClickBtn">
        <v-icon>dehaze</v-icon>
      </v-toolbar-side-icon>
      <!-- <router-link > -->
      <span class="hidden-sm-and-down" :to="home">Rakbuku</span>
      <!-- </router-link> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <!-- <v-btn outline round dark>Sign Up</v-btn> -->

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
                <v-text-field label="Username" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
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
                  <v-btn class="grey--text text--darken-4" depressed block color="primary">Sign Up</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-btn outline round dark>Login</v-btn>
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClickBtn() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onClick() {
      //
    }
  }
};
</script>

