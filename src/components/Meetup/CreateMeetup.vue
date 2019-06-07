<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="display-2 primary--text">Create a new Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12v sm6 offset-sm3>
              <v-text-field
                label="Title"
                v-model="title"
                :rules="[v => !!v || 'Title is required.']"
                name="title"
                id="title"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12v sm6 offset-sm3>
              <v-text-field
                label="Location"
                v-model="location"
                :rules="[v => !!v || 'Location is required.']"
                name="location"
                id="location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12v sm6 offset-sm3>
              <v-text-field
                label="Image URL"
                v-model="imageUrl"
                :rules="[v => !!v || 'Image Url is requird.']"
                name="imageUrl"
                id="image-url"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12v sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12v sm6 offset-sm3>
              <v-textarea
                label="Descirption"
                v-model="description"
                :rules="[v => !!v || 'Description is required.']"
                name="description"
                id="description"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn type="submit" class="primary" :disabled="!valid">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      title: "",
      location: "",
      imageUrl: "",
      description: ""
    };
  },
  methods: {
    onCreateMeetup() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        };
        this.$store.dispatch("createMeetup", meetupData);
        this.$refs.form.reset();
        this.$router.push("/meetups");
      }
    }
  }
};
</script>
