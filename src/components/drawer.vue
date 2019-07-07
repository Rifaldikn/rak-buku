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
    <v-list v-for="item in items" :key="item.text">
      <v-list-tile >
        <v-list-tile-action router to="/gwp">
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{item.text}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    items: [
      // { icon: "search", text: "Discover", link: { path: "/" } },
      // {
      //   icon: "library_books",
      //   text: "My Library",
      //   link: { path: "/mylibrary" }
      // },
      // { heading: "Browse" },
      // { icon: "people", text: "Authors", link: "/mylibrary:Authors" },
      // { icon: "category", text: "Categories", link: "/" },
      // { icon: "show_chart", text: "Charts", link: "/" },
      // { heading: "Publisher" },
      {
        icon: "show_chart",
        text: "Add Book",
        path: "/publisher/addbook"
      },
      {
        icon: "show_chart",
        text: "Books Manager",
        path: "/publisher/books"
      }
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

