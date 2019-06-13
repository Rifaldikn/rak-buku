<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
      style="background-color:#1B1A18"
      dark
      width="200"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout dark v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <!-- <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>-->
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click>
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#1B1A18" dark app fixed flat>
      <v-toolbar-title style="width: 300px; color:#30DE82" class="ml-0 pl-3">
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon -->
        <v-toolbar-side-icon dark medium @click.stop="drawer = !drawer">
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
    </v-toolbar>m
    <v-content class="grey darken-3">
      <v-container fluid fill-height>
        <v-layout justify-center>
          <!-- main content -->
          <div class="owl-carousel owl-theme">
            <div class="item">
              <h4>1</h4>
            </div>
            <div class="item">
              <h4>2</h4>
            </div>
            <div class="item">
              <h4>3</h4>
            </div>
            <div class="item">
              <h4>4</h4>
            </div>
            <div class="item">
              <h4>5</h4>
            </div>
            <div class="item">
              <h4>6</h4>
            </div>
            <div class="item">
              <h4>7</h4>
            </div>
            <div class="item">
              <h4>8</h4>
            </div>
            <div class="item">
              <h4>9</h4>
            </div>
            <div class="item">
              <h4>10</h4>
            </div>
            <div class="item">
              <h4>11</h4>
            </div>
            <div class="item">
              <h4>12</h4>
            </div>
          </div>

          <!-- end main content -->
        </v-layout>
      </v-container>
    </v-content>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">Create contact</v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt>
                </v-avatar>
                <v-text-field placeholder="Name"></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field prepend-icon="business" placeholder="Company"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field placeholder="Job title"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field prepend-icon="mail" placeholder="Email"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
export default {
  name: "App",
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      // { icon: "contacts", text: "Contacts" },
      // { icon: "history", text: "Frequently contacted" },
      // { icon: "content_copy", text: "Duplicates" },
      // {
      //   icon: "keyboard_arrow_up",
      //   "icon-alt": "keyboard_arrow_down",
      //   text: "Labels",
      //   model: true,
      //   children: [{ icon: "add", text: "Create label" }]
      // },
      // {
      //   icon: "keyboard_arrow_up",
      //   "icon-alt": "keyboard_arrow_down",
      //   text: "More",
      //   model: false,
      //   children: [
      //     { text: "Import" },
      //     { text: "Export" },
      //     { text: "Print" },
      //     { text: "Undo changes" },
      //     { text: "Other contacts" }
      //   ]
      // },
      // { icon: "settings", text: "Settings" },
      // { icon: "chat_bubble", text: "Send feedback" },
      // { icon: "help", text: "Help" },
      // { icon: "phonelink", text: "App downloads" },
      { icon: "search", text: "Discover" },
      { icon: "library_books", text: "My Library" },
      { heading: "Browse" },
      { icon: "people", text: "Authors" },
      { icon: "category", text: "Categories" },
      { icon: "show_chart", text: "Charts" }
    ]
  }),
  props: {
    source: String
  }
};
</script>

