<template>
  <v-app id="inspire" dark>
    <drawer />
    <toolbar />
    <mainContent />
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ this.text }}
      <v-btn color="pink" flat @click="closeSnackbar()">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  data: () => ({
    y: "top",
    x: null,
    mode: "",
    timeout: 6000
  }),
  props: {
    source: String
  },
  computed: {
    ...mapState("app", ["snackbar", "errorMessage"]),
    snackbar: {
      get() {
        return this.$store.state.app.snackbar;
      },
      set(val) {
        this.toggleSnackbar(val);
      }
    },
    text: {
      get() {
        return this.$store.state.app.errorMessage;
      },
      set(val) {
        this.setErrorMessage(val);
      }
    }
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
a {
  text-decoration: none;
}
</style>


