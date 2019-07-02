<template>
  <v-app id="inspire" dark>
    <drawer />
    <toolbar />
    <mainContent />
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
body {
  min-height: 100vh;
}
</style>


