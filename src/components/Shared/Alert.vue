<template>
  <v-alert type="error" dismissible :value="true" @input="onClose">{{text}}</v-alert>
</template>

<script>
export default {
  props: {
    text: String
  },
  date() {
    return {};
  },
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>
