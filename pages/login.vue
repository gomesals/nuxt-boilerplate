<template lang="pug">
  div
    v-card.box-shadow(flat)
      v-toolbar.px-4.py-3(flat dark color="primary")
        v-toolbar-title Acesso
      v-card-text.pa-4
        v-form(
          @submit.prevent="send"
          v-model="form.valid" 
          ref="form" 
          lazy-validation 
        )
          v-text-field.mb-3(
            v-model="user.email"
            prepend-icon="email"
            name="email"
            label="E-mail"
            type="email"
            :rules="rules.email"
            required
          )
          v-text-field(
            v-model="user.password"
            prepend-icon="lock"
            name="password"
            label="Senha"
            type="password"
            :rules="rules.required"
            required
          )
      v-card-actions.pa-4
        v-btn(
          color="grey lighten-1"
          :to="{name: 'senha'}" 
          flat nuxt
        ) Esqueceu a senha?
        v-spacer
        v-btn(
          @click="send" 
          color="accent"
          :loading="form.disabled"
          depressed light
        )
          v-icon send
          | &nbsp;Acessar
    v-tooltip(right)
      v-btn(
        slot="activator"
        color="grey darken-3 white--text"
        :to="{name: 'index'}"
        :disabled="form.disabled"
        fixed bottom left fab icon nuxt
      )
        v-icon keyboard_arrow_left
      span Voltar
</template>

<script>
export default {
  layout: 'blank',
  asyncData({ store, redirect }) {
    if (store.state.authorization) {
      return redirect('/admin')
    }
  },
  data: () => ({
    form: {
      disabled: false,
      valid: false
    },
    rules: {
      required: [v => !!v || 'Campo obrigatório'],
      email: [
        v => !!v || 'Campo obrigatório.',
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail inválido.'
      ]
    },
    user: {
      email: '',
      password: ''
    }
  }),
  head: () => ({
    title: 'Acesso'
  }),
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.user.email,
          password: this.user.password
        })
        this.$router.push({ name: 'admin' })
      } catch (e) {
        this.$root.$emit('snackError', 'E-mail ou senha inválidos.')
      }
    },
    send() {
      if (!this.$refs.form.validate()) {
        this.$root.$emit(
          'snackDefault',
          'Preencha todos os campos antes de enviar.'
        )
        return
      }
      this.login()
    }
  }
}
</script>

