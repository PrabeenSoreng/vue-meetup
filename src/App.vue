<template>
  <v-app color="grey lighten-4">
    <v-navigation-drawer v-model="sidenav" temporary app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat app>
      <v-toolbar-side-icon @click.stop="sidenav = !sidenav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="primary--text">
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat color="primary" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidenav: false,
      menuItems: [
        { icon: "supervisor_account", title: "View Meetups", link: "/meetups" },
        { icon: "room", title: "Organize Meetup", link: "/meetup/new" },
        { icon: "person", title: "Profile", link: "/profile" },
        { icon: "face", title: "Register", link: "/register" },
        { icon: "lock_open", title: "SignIn", link: "/signin" }
      ]
    };
  }
};
</script>
