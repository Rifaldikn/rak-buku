<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center row wrap align-center>
        <!-- main content -->

        <v-flex xs11>
          <v-layout wrap>
            <v-flex shrink xs2 v-for="i in 6" pa-2>
              <v-img
                contain
                src="https://books.google.com/books/content/images/frontcover/khBrDwAAQBAJ?fife=w200-h300"
              ></v-img>
              <v-flex pa-2 shrink class="black">
                <!-- <v-card to="/daw"> -->
                <router-link :to="{path:'/panda'}">
                  <div style="color:#30DE82" class="subheading">Doriyaki</div>
                </router-link>
                <div style="color:#fff" class="body-1">Dorippu</div>
                <!-- </v-card> -->
              </v-flex>
            </v-flex>
          </v-layout>

          <v-layout wrap class="item-multiple-list">
            <hooper :infiniteScroll="true" :itemsToShow="6" style="height: auto">
              <slide v-for="i in 10">
                <div>
                  <v-flex pa-2>
                    <v-img
                      contain
                      src="https://books.google.com/books/content/images/frontcover/khBrDwAAQBAJ?fife=w200-h300"
                    ></v-img>
                    <v-flex pa-2 shrink class="black">
                      <!-- <v-card to="/daw"> -->
                      <router-link :to="{path:'/panda'}">
                        <div style="color:#30DE82" class="subheading">Doriyaki</div>
                      </router-link>
                      <div style="color:#fff" class="body-1">Dorippu</div>
                      <!-- </v-card> -->
                    </v-flex>
                  </v-flex>
                </div>
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
          </v-layout>

          <router-view></router-view>
        </v-flex>

        <!-- end main content -->
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

<style scoped>
/* .item-multiple-list {
    -webkit-box-shadow: inset 0px 0px 49px 27px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 49px 27px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 49px 27px rgba(0, 0, 0, 0.75);
  z-index: 99;
} */
</style>


