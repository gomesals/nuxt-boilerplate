<template lang="pug">
  v-app
    v-content
      v-container(grid-list-xl)
        v-layout(row wrap)
          v-flex(xs12 sm8 offset-sm2 md6 offset-md3)
            nuxt
    snackbar
</template>

<script>
import Snackbar from '~/components/Snackbar'

export default {
  components: { Snackbar }
}
</script>
