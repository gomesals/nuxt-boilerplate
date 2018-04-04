<template lang="pug">
  div
    v-navigation-drawer.pt-1(
      v-model="drawer"
      mobile-break-point="960"
      :ripple="false"
      :mini-variant="mini"
      :class="{'px-3': !mini}"
      fixed app floating
    )
      v-toolbar(flat color="transparent")
        v-list.py-0
          v-list-tile(avatar)
            v-list-tile-avatar
              v-icon code
            v-list-tile-content
              v-list-tile-title App
      v-list.mt-4.pt-0(dense)
        v-list-tile(
          v-if="possibleToShow(item)"
          v-for="item in items"
          :key="item.title"
          :to="{name: item.to}"
          nuxt
        )
          v-list-tile-action(:title="item.title")
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
        v-divider.transparent.my-3
        v-list-tile(:to="{name: 'sair'}" nuxt title="Sair")
          v-list-tile-action
            v-icon exit_to_app
          v-list-tile-content
            v-list-tile-title Sair
    v-toolbar(dark app flat color="primary")
      v-toolbar-side-icon(@click.stop="navigationToggle")
      v-toolbar-title {{ toolbar.title }}
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    mini: true,
    items: [
      { title: 'Início', icon: 'dashboard', to: 'index' },
      { title: 'Snackbar', icon: 'build', to: 'samples-snackbar' },
      { title: 'Formulário', icon: 'build', to: 'samples-form' },
      { title: 'Page 2', icon: 'build', to: '' }
    ],
    toolbar: {
      title: 'Início'
    }
  }),
  beforeMount() {
    this.$root.$on('changeToolbar', title => {
      this.toolbar.title = title
    })
  },
  mounted() {
    if (this.$vuetify.breakpoint.width < 960) {
      this.mini = false
    }
  },
  methods: {
    possibleToShow(item) {
      if (!item.admin) return true
      return this.$store.state.isAdmin
    },
    navigationToggle() {
      if (this.$vuetify.breakpoint.width < 960) {
        this.mini = false
        this.drawer = !this.drawer
      } else {
        this.mini = !this.mini
      }
    }
  }
}
</script>
