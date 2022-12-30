<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {
      drawer: null,
    };
  },
  methods: {},
};
</script>

<template>
  <v-app>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <v-app-bar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Earn Workshop</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-1"
              >Workshop 1</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-2"
              >Workshop 2</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-3"
              >Workshop 3</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-4"
              >Workshop 4</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-5"
              >Workshop 5</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-6"
              >Workshop 6</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-7"
              >Workshop 7</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-8"
              >Workshop 8</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-9"
              >Workshop 9</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-10"
              >Workshop 10</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-11"
              >Workshop 11</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-12"
              >Workshop 12</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-13"
              >Workshop 13</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-14"
              >Workshop 14</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-15"
              >Workshop 15</RouterLink
            ></v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            ><RouterLink to="/workshop-16"
              >Workshop 16</RouterLink
            ></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {

  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
