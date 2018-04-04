<template lang="pug">
  div
    v-card.box-shadow(flat)
      v-toolbar.px-4.py-3(flat dark color="primary")
        v-toolbar-title Redefinir senha
      v-card-text.pa-4
        v-form(
          @submit.prevent="send"
          v-model="form.valid"
          ref="form" 
          lazy-validation
        )
          v-text-field(
            v-model="user.email"
            prepend-icon="email"
            name="email"
            label="E-mail"
            type="email"
            :rules="rules.email"
            required
          )
      v-card-actions.pa-4
        v-spacer
        v-btn(
          @click="send"
          color="accent"
          :loading="form.disabled"
          depressed light
        )
          v-icon lock
          | &nbsp;Redefinir
    v-tooltip(right)
      v-btn(
        slot="activator"
        color="grey darken-3 white--text"
        :to="{name: 'login'}"
        :disabled="form.disabled"
        fixed bottom left fab icon nuxt
      )
        v-icon keyboard_arrow_left
      span Voltar
</template>

<script>
export default {
  layout: 'blank',
  data: () => ({
    form: {
      valid: false,
      disabled: false
    },
    rules: {
      email: [
        v => !!v || 'Campo obrigatório.',
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail inválido.'
      ]
    },
    user: {
      email: ''
    }
  }),
  head: () => ({
    title: 'Redefinir senha'
  }),
  methods: {
    async submit() {
      this.form.disabled = true
      try {
        await this.$axios.$post('/api/auth/password', { user: this.user })
        this.$root.$emit('snackSuccess', 'E-mail com instruções enviado.')
      } catch (e) {
        this.$root.$emit('snackError', 'E-mail não encontrado.')
      } finally {
        this.form.disabled = false
      }
    },
    send() {
      if (!this.$refs.form.validate()) {
        this.$root.$emit('toastDefault', 'Preencha o e-mail antes de enviar.')
        return
      }
      this.submit()
    }
  }
}
</script>
