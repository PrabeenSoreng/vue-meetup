<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 v-if="error">
        <Alert @dismissed="onDismissed" :text="error.message"></Alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      type="email"
                      label="Email"
                      id="email"
                      name="email"
                      v-model="email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      type="password"
                      label="Password"
                      id="password"
                      name="password"
                      v-model="password "
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                      type="submit"
                      class="primary"
                      flat
                      :disabled="loading"
                      :loading="loading"
                    >
                      Sign In
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Alert from "@/components/Shared/Alert";

export default {
  components: {
    Alert
  },
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "Email is required.",
        v => /.+@.+/.test(v) || "Email must be valid."
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required.",
        v => (v && v.length >= 6) || "Password must be greater than 6."
      ]
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) this.$router.push("/");
    }
  },
  methods: {
    onSignin() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.$store.dispatch("signinUser", {
          email: this.email,
          password: this.password
        });
        this.$refs.form.reset();
      }
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>