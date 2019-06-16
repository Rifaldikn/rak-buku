<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#1B1A18" dark app fixed flat>
    <v-toolbar-title style="width: 300px; color:#30DE82" class="ml-0 pl-3">
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon -->
      <v-toolbar-side-icon dark medium @click.stop="onClickBtn">
        <v-icon>dehaze</v-icon>
      </v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Rakbuku</span>
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
    <v-btn outline round dark>Sign Up</v-btn>
    <v-btn light round color="#36F791">Login</v-btn>

    <!-- <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn outline round dark v-on="on">Login</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>-->
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

