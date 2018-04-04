<template lang="pug">
  v-app
    v-content
      v-container(grid-list-xl)
        v-layout(row wrap)
          v-flex.pb-5(xs12 sm10 offset-sm1)
            nuxt
    snackbar
</template>

<script>
import Snackbar from '~/components/Snackbar'
export default {
  components: { Snackbar }
}
</script>
