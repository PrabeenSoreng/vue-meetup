<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h2 class="primary--text">{{ meetup.title }}</h2>
          </v-card-title>
          <v-img :src="meetup.imageUrl" height="400px"></v-img>
          <v-card-text>
            <div class="primary--text">{{ meetup.date }} - Where it takes place.</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum provident quisquam error. Itaque optio ex corrupti magni, aliquid dolore reiciendis, sunt deleniti asperiores vel, quaerat ad rerum molestias necessitatibus quas?</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>
