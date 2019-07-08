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
    <v-list v-for="item in items">
      <!-- <router-link> -->

      <v-list-tile
        router
        :to="item.path"
        :key="item.path"
        v-if="loginStatus == true || item.role != 'publisher' "
      >
        <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{item.text}}</v-list-tile-title>
      </v-list-tile>
      <!-- </router-link> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "App",
  data: () => ({
    items: [
      {
        icon: "search",
        text: "Discover",
        path: "/"
      },
      {
        icon: "library_books",
        text: "My Library",
        path: "/mylibrary"
      },
      {
        heading: "Browse"
      },
      {
        icon: "people",
        text: "Authors",
        path: "/mylibrary:Authors"
      },
      {
        icon: "category",
        text: "Categories",
        path: "/"
      },
      {
        icon: "show_chart",
        text: "Charts",
        path: "/"
      },
      {
        heading: "Publisher",
        role: "publisher"
      },
      {
        icon: "show_chart",
        text: "Books Manager",
        path: "/publisher/bookManager",
        role: "publisher"
      }
    ]
  }),
  computed: {
    ...mapState("app", ["drawer"]),
    ...mapGetters("app", ["loginStatus"]),
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

