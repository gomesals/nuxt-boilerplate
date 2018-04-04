import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.deepPurple.darken3,
    accent: colors.teal.accent3
  }
})
