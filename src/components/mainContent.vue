<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center row wrap align-center>
        <v-flex xs11>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
};
</script>

