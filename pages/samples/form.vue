<template lang="pug">
  .pb-5
    v-form(v-model="form.valid" ref="form" lazy-validation @submit.prevent="save")
      .body-2.blue-grey--text.text--lighten-2.my-4 Bloco
      v-card.box-shadow.pa-4(flat)
        v-card-text
          v-switch(
            v-model="data.switch"
            :label="data.switch ? 'Ligado' : 'Desligado'"
          )
          v-radio-group(v-model="data.radio" :column="false")
            v-radio(label="Radio true" :value="true")
            v-radio(label="Radio false" :value="false")
          v-text-field.mb-2(
            v-model="data.field"
            label="Campo"
            :rules="rules.required"
            required
          )
    form-buttons(@goBack="goBack" @save="save", :disabled="form.disabled")
</template>

<script>
import FormButtons from '~/components/FormButtons'

export default {
  components: { FormButtons },
  data: () => ({
    data: {
      switch: true,
      radio: false,
      field: null
    },
    rules: {
      required: [v => !!v || 'Campo obrigatório.']
    },
    form: {
      valid: false,
      disabled: false
    }
  }),
  beforeMount() {
    this.$root.$emit('changeToolbar', 'Formulário')
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'index' })
    },
    save() {
      if (!this.$refs.form.validate()) {
        this.$root.$emit(
          'snackDefault',
          'Preencha todos os campos antes de salvar.'
        )
        return
      }
      this.$root.$emit('snackSuccess', 'Salvo!')
    }
  }
}
</script>

