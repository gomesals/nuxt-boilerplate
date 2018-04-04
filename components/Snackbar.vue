<template lang="pug">
  v-snackbar(
    v-model="visible"
    :color="color.background"
    :timeout="timeout"
    vertical top right auto-height
  )
    span(:class="color.text") {{ text }}
    v-btn(
      @click="visible = false"
      :color="color.button"
      flat
    ) Fechar
</template>

<script>
export default {
  data: () => ({
    color: {
      background: 'secondary',
      button: 'accent',
      text: 'white--text'
    },
    visible: false,
    text: 'Info',
    timeout: 6000
  }),
  mounted() {
    this.$root.$on('snackDefault', this.snackDefault)
    this.$root.$on('snackSuccess', this.snackSuccess)
    this.$root.$on('snackWarning', this.snackWarning)
    this.$root.$on('snackError', this.snackError)
    this.$root.$on('handleErr', this.handleErr)
  },
  methods: {
    showSnack(options) {
      this.visible = false
      setTimeout(() => {
        this.text = options.text
        this.timeout = options.timeout
        this.color = options.color
        this.visible = true
      }, 300)
    },
    snackDefault(text, timeout = 6000) {
      this.showSnack({
        text,
        timeout,
        color: {
          background: 'grey',
          button: 'white',
          text: 'white--text'
        }
      })
    },
    snackSuccess(text, timeout = 6000) {
      this.showSnack({
        text,
        timeout,
        color: {
          background: 'green accent-2',
          button: 'black',
          text: 'black--text'
        }
      })
    },
    snackWarning(text, timeout = 6000) {
      this.showSnack({
        text,
        timeout,
        color: {
          background: 'amber darken-4',
          button: 'white',
          text: 'white--text'
        }
      })
    },
    snackError(text, timeout = 6000) {
      this.showSnack({
        text,
        timeout,
        color: {
          background: 'error',
          button: 'white',
          text: 'white--text'
        }
      })
    },
    timeOutCalc(text) {
      if (!text) return 6000
      // 3: Words per second
      return Math.ceil(text.split(' ').length / 3) + 6 * 1000
    },
    handleErr(e) {
      if (!e.response || !e.response.data.message) {
        console.error(e)
        return this.snackError(
          'Ocorreu um erro inesperado, tente novamente mais tarde.',
          6000
        )
      }
      if (e.response.data.level === 'warning') {
        return this.snackWarning(
          e.response.data.message,
          this.timeOutCalc(e.response.data.message)
        )
      }
      this.snackError(
        e.response.data.message,
        this.timeOutCalc(e.response.data.message)
      )
    }
  }
}
</script>
