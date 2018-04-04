<template lang="pug">
  div
    v-tooltip(left)
      v-btn.fabSecondary(
        @click="goBack"
        slot="activator"
        color="grey darken-3 white--text"
        :disabled="disabled"
        fixed bottom right fab icon small
      )
        v-icon keyboard_arrow_left
      span Voltar
    v-tooltip(top)
      v-btn(
        @click="save"
        slot="activator"
        color="accent"
        :loading="disabled"
        fixed bottom right fab icon light
      )
        v-icon save
      span Salvar
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    },
    save() {
      this.$emit('save')
    }
  }
}
</script>

<style>
.fabSecondary {
  right: 84px;
  bottom: 24px !important;
}
</style>
