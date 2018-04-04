<template lang="pug">
  v-app
    navigation
    v-content
      v-container(grid-list-xl)
        v-layout(row wrap)
          v-flex.pb-5(xs12 sm10 offset-sm1)
            nuxt
    snackbar
</template>

<script>
import Navigation from '~/components/Navigation'
import Snackbar from '~/components/Snackbar'

export default {
  components: { Navigation, Snackbar }
}
</script>
