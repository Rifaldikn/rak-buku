<template>
  <v-navigation-drawer
    v-model="navDrawer"
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
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    items: [
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
      { icon: "search", text: "Discover" },
      { icon: "library_books", text: "My Library" },
      { heading: "Browse" },
      { icon: "people", text: "Authors" },
      { icon: "category", text: "Categories" },
      { icon: "show_chart", text: "Charts" }
    ]
  }),
  computed: {
    ...mapState("app", ["drawer"]),
    navDrawer: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  }
};
</script>

