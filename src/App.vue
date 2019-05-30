<template>
  <v-app color="grey lighten-4">
    <v-navigation-drawer height="100%" v-model="sidenav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat app>
      <v-toolbar-side-icon @click.stop="sidenav = !sidenav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="primary--text">DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat color="primary">
          <v-icon left>supervisor_account</v-icon>
          <span>View Meetup</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content></v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidenav: false
    };
  }
};
</script>
