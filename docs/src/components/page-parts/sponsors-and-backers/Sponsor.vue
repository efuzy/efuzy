<template lang="pug">
  q-card.efuzy-sponsor(flat, bordered, @click.native="openWebsite", :style="style")
    q-card-section.efuzy-sponsor__title {{ name }}
    q-separator
    q-card-section.efuzy-sponsor__logo.flex.flex-center
      q-img(:alt="name" :src="`https://cdn.efuzy.dev/sponsors/${img}`")
</template>

<script>
import { openURL } from 'efuzy'

export default {
  name: 'Sponsor',

  props: {
    img: String,
    name: String,
    url: String
  },

  computed: {
    style () {
      return {
        cursor: this.url ? 'pointer' : 'default'
      }
    }
  },

  methods: {
    openWebsite () {
      this.url && openURL(this.url)
    }
  }
}
</script>

<style lang="sass">
.efuzy-sponsor
  width: 100%
  max-width: 14rem
  height: 265px

  &__logo
    height: 200px
  &__title
    transition: color .28s, background .28s

  &:hover .efuzy-sponsor__title
    background: $primary
    color: #fff
</style>
