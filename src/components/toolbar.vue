<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#1B1A18" dark app fixed flat>
    <v-toolbar-title style="width: 400px; color:#30DE82" class="ml-0 pl-3">
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon -->
      <v-toolbar-side-icon dark medium @click.stop="onClickBtn">
        <v-icon>dehaze</v-icon>
      </v-toolbar-side-icon>
      <!-- <router-link > -->
      <span class="hidden-sm-and-down">Rakbuku</span>
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
    <div v-if="loginStatus == false">
      <signup />
      <login />
    </div>
    <v-btn outline round dark @click="logout()" v-else>Log Out</v-btn>
  </v-toolbar>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import signup from "./partials/signup";
import login from "./partials/login";

export default {
  components: {
    signup,
    login
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    ...mapGetters("app", ["loginStatus"])
  },
  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClickBtn() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    logout() {
      this.$store.dispatch("users/logoutUser");
    }
  }
};
</script>

