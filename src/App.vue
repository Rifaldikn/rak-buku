<template>
  <v-app id="inspire">
    <drawer/>
    <toolbar/>
    <mainContent class="grey darken-3"/>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  props: {
    source: String
  }
};
</script>

<style>
*:focus {
  outline: 0 !important;
}

main {
  overflow-y: hidden;
}
</style>


