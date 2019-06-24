<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center row wrap align-center>
        <!-- main content -->

        <v-flex xs11>
          <v-layout wrap >
            <v-flex shrink xs2 v-for="i in 6" pa-2>
              <v-img
                contain
                src="https://books.google.com/books/content/images/frontcover/khBrDwAAQBAJ?fife=w200-h300"
              ></v-img>
              <!-- <v-layout column fill-height class="lightbox white--text"> -->
              <!-- <v-spacer></v-spacer> -->
              <v-flex pa-2 shrink class="black">
                <div style="color:#30DE82"  class="subheading">Doriyaki</div>
                <div style="color:#fff" class="body-1">Dorippu</div>
              </v-flex>
              <!-- </v-layout> -->
            </v-flex>
          </v-layout>

          <router-view></router-view>
        </v-flex>

        <!-- end main content -->
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style scoped>
</style>


