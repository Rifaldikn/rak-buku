<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center row wrap align-center>
        <!-- main content -->

        <v-flex xs11>
          <img
            src="https://books.google.com/books/content/images/frontcover/khBrDwAAQBAJ?fife=w200-h300"
          >
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


