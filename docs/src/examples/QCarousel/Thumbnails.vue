<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.efuzy.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.efuzy.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.efuzy.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.efuzy.dev/img/efuzy.jpg" />
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
