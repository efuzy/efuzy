<template lang="pug">
  <div class="q-layout-padding">
    <q-btn color="primary" label="Export" @click="exportDialog = true" />
    <q-dialog v-model="exportDialog">
      <q-card>
        <q-tabs class="text-grey-7" v-model="exportTab" active-color="primary" align="justify">
          <q-tab name="sass" no-caps label="Sass" />
          <q-tab name="scss" no-caps label="SCSS" />
          <q-tab name="styl" no-caps label="Stylus" />
          <q-tab name="efuzy-cli" no-caps label="Efuzy CLI" />
          <q-tab name="umd" no-caps label="UMD" />
          <q-tab name="vue-cli" no-caps label="Vue CLI" />
        </q-tabs>

        <q-separator />

        <q-tab-panels class="bg-code" v-model="exportTab" animated>
          <q-tab-panel class="q-pa-none" name="sass">
            <pre>{{ sassExport }}</pre>
          </q-tab-panel>

          <q-tab-panel class="q-pa-none" name="scss">
            <pre>{{ scssExport }}</pre>
          </q-tab-panel>

          <q-tab-panel class="q-pa-none" name="styl">
            <pre>{{ stylusExport }}</pre>
          </q-tab-panel>

          <q-tab-panel class="q-pa-none" name="efuzy-cli">
            <pre>{{ efuzyCliExport }}</pre>
          </q-tab-panel>

          <q-tab-panel class="q-pa-none" name="umd">
            <pre>{{ umdExport }}</pre>
          </q-tab-panel>

          <q-tab-panel class="q-pa-none" name="vue-cli">
            <pre>{{ vueCliExport }}</pre>
          </q-tab-panel>
        </q-tab-panels>

        <q-separator />

        <q-card-actions align="right">
          <q-btn color="primary" flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { colors } from 'efuzy'
const { setBrand, luminosity } = colors

export default {
  data () {
    return {
      colors: {
        primary: '#027BE3',
        secondary: '#26A69A',
        accent: '#9C27B0',

        dark: '#1d1d1d',

        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      },

      dark: {
        primary: true,
        secondary: true,
        accent: true,
        dark: true,

        positive: true,
        negative: true,
        info: false,
        warning: false
      },

      darkMode: false,
      exportDialog: false,
      exportTab: 'sass',
      list: ['primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'],
      sideColors: ['secondary', 'dark', 'positive', 'negative', 'info', 'warning']
    }
  },

  watch: {
    'colors.primary' (val) {
      this.update('primary', val)
    },

    'colors.secondary' (val) {
      this.update('secondary', val)
    },

    'colors.accent' (val) {
      this.update('accent', val)
    },

    'colors.dark' (val) {
      this.update('dark', val)
    },

    'colors.positive' (val) {
      this.update('positive', val)
    },

    'colors.negative' (val) {
      this.update('negative', val)
    },

    'colors.info' (val) {
      this.update('info', val)
    },

    'colors.warning' (val) {
      this.update('warning', val)
    }
  },

  computed: {
    pageClass () {
      return this.darkMode === true
        ? 'bg-grey-10 text-white'
        : 'bg-white text-black'
    },

    sassExport () {
      return `// src/css/efuzy.variables.sass\n\n` +
        `$primary   : ${this.colors.primary}\n` +
        `$secondary : ${this.colors.secondary}\n` +
        `$accent    : ${this.colors.accent}\n\n` +
        `$dark      : ${this.colors.dark}\n\n` +
        `$positive  : ${this.colors.positive}\n` +
        `$negative  : ${this.colors.negative}\n` +
        `$info      : ${this.colors.info}\n` +
        `$warning   : ${this.colors.warning}`
    },

    scssExport () {
      return `// src/css/efuzy.variables.scss\n\n` +
        `$primary   : ${this.colors.primary};\n` +
        `$secondary : ${this.colors.secondary};\n` +
        `$accent    : ${this.colors.accent};\n\n` +
        `$dark      : ${this.colors.dark};\n\n` +
        `$positive  : ${this.colors.positive};\n` +
        `$negative  : ${this.colors.negative};\n` +
        `$info      : ${this.colors.info};\n` +
        `$warning   : ${this.colors.warning};`
    },

    stylusExport () {
      return `// src/css/efuzy.variables.styl\n\n` +
        `$primary   = ${this.colors.primary}\n` +
        `$secondary = ${this.colors.secondary}\n` +
        `$accent    = ${this.colors.accent}\n\n` +
        `$dark      = ${this.colors.dark}\n\n` +
        `$positive  = ${this.colors.positive}\n` +
        `$negative  = ${this.colors.negative}\n` +
        `$info      = ${this.colors.info}\n` +
        `$warning   = ${this.colors.warning}`
    },

    efuzyCliExport () {
      return `// efuzy.conf.js
// (will not work for IE11)

return {
  framework: {
    config: {
      brand: {
        primary: '${this.colors.primary}',
        secondary: '${this.colors.secondary}',
        accent: '${this.colors.accent}',

        dark: '${this.colors.dark}',

        positive: '${this.colors.positive}',
        negative: '${this.colors.negative}',
        info: '${this.colors.info}',
        warning: '${this.colors.warning}'
      }
    }
  }
}`
    },

    umdExport () {
      return `// place before including Efuzy UMD script
// (will not work for IE11)

window.efuzyConfig = {
  brand: {
    primary: '${this.colors.primary}',
    secondary: '${this.colors.secondary}',
    accent: '${this.colors.accent}',

    dark: '${this.colors.dark}',

    positive: '${this.colors.positive}',
    negative: '${this.colors.negative}',
    info: '${this.colors.info}',
    warning: '${this.colors.warning}'
  }
}`
    },

    vueCliExport () {
      return `// main.js
// (will not work for IE11)

Vue.use(Efuzy, {
  config: {
    brand: {
      primary: '${this.colors.primary}',
      secondary: '${this.colors.secondary}',
      accent: '${this.colors.accent}',

      dark: '${this.colors.dark}',

      positive: '${this.colors.positive}',
      negative: '${this.colors.negative}',
      info: '${this.colors.info}',
      warning: '${this.colors.warning}'
    }
  }
})`
    }
  },

  methods: {
    update (color, val) {
      setBrand(color, val, document.getElementById('theme-picker'))
      this.dark[color] = luminosity(val) <= 0.4
    }
  }
}
</script>
