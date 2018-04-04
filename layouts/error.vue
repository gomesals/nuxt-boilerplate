<template lang="pug">
  .text-xs-center
    .display-1.my-3 {{ error.statusCode }}
    .subheading.mb-2(v-if="error.statusCode !== 404")
      | {{ error.message.message ? error.message.message : error.message }}
    .subheading.mb-2(v-else) Página não encontrada
    v-btn(
      color="primary"
      :to="{name: 'index'}"
      outline dark
    ) Página inicial
</template>

<script>
export default {
  props: ['error'],
  layout: 'blank'
}
</script>
