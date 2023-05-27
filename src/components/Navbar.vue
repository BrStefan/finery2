<template>
  <v-app>
    <v-app-bar app color="white" dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12">
        <img src="logo.png" alt="Logo" class="logo" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Sign in</v-btn>
      <v-btn color="primary" dark>Register</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" :temporary="isMobile">
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="d-none d-md-flex">
            <v-list dense>
              <v-list-item v-for="(item, index) in menuItems" :key="index" link>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        { title: 'New In' },
        { title: 'Jewelry' },
        { title: 'Watches' },
        { title: 'Accessories' },
        { title: 'Gifts' },
        { title: 'Sale' },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.platform.is.mobile;
    },
  },
  mounted() {
    // Accessing $vuetify.platform here should work
    console.log("Debug")
    console.log(this.$vuetify.platform)
  }
};
</script>

<style>
.logo {
  width: 120px;
  height: auto;
}

.d-none {
  display: none !important;
}

.d-md-flex {
  display: flex !important;
}
</style>