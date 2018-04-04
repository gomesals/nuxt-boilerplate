<template lang="pug">
  div
    v-btn(@click="ss") snack success
    v-btn(@click="se") snack error
    v-btn(@click="sw") snack warning
    v-btn(@click="sd") snack default
</template>

<script>
export default {
  beforeMount() {
    this.$root.$emit('changeToolbar', 'Snackbar')
  },
  methods: {
    ss() {
      this.$root.$emit('snackSuccess', 'Success snack')
    },
    se() {
      this.$root.$emit('snackError', 'Error snack')
    },
    sw() {
      this.$root.$emit('snackWarning', 'Warning snack')
    },
    sd() {
      this.$root.$emit('snackDefault', 'Default snack')
    }
  }
}
</script>
