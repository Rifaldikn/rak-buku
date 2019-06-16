<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center row wrap align-center>
        <!-- main content -->

        <v-flex xs10>
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


