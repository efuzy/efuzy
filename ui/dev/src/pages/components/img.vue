<template>
  <div class="q-layout-padding">
    <div class="q-gutter-lg row items-start">
      <q-img
        src="https://cdn.efuzy.dev/img/image-src.png"
        srcset="https://cdn.efuzy.dev/img/image-1x.png 300w, https://cdn.efuzy.dev/img/image-2x.png 2x,
          https://cdn.efuzy.dev/img/image-3x.png 3x, https://cdn.efuzy.dev/img/image-4x.png 4x"
        height="280px"
        style="height: 280px; max-width: 300px"
        :native-context-menu="nativeContextMenu"
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset
        </div>
      </q-img>

      <q-img
        src="https://cdn.efuzy.dev/img/image-src.png"
        srcset="https://cdn.efuzy.dev/img/image-1x.png 400w, https://cdn.efuzy.dev/img/image-2x.png 800w,
          https://cdn.efuzy.dev/img/image-3x.png 1200w, https://cdn.efuzy.dev/img/image-4x.png 1600w"
        sizes="(max-width: 400px) 400w,
          (min-width: 400px) and (max-width: 800px) 800w,
          (min-width: 800px) and (max-width: 1200px) 1200w,
          (min-width: 1200px) 1600w"
        height="280px"
        style="max-width: 300px"
        :native-context-menu="nativeContextMenu"
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset & sizes
        </div>
      </q-img>

      <q-img
        src="https://cdn.efuzy.dev/img/image-src.png"
        height="220px"
        width="220px"
        :native-context-menu="nativeContextMenu"
      >
        <div class="absolute-bottom text-body1 text-center">
          With forced width & height
        </div>
      </q-img>

    </div>

    <q-btn push color="teal" label="Refresh" @click="refresh" class="q-my-lg" />
    <q-toggle v-model="nativeContextMenu" label="Enable context menu" />

    <div class="q-gutter-lg row items-start">
      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px"
        :native-context-menu="nativeContextMenu"
      >
        <div slot="loading" class="text-h2 text-white">
          Loading...
        </div>
      </q-img>

      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px; border-radius: 50%"
        :native-context-menu="nativeContextMenu"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Radius 50%
        </div>
      </q-img>

      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px; border-radius: 15px"
        :native-context-menu="nativeContextMenu"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Radius 15px
        </div>
      </q-img>

      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px"
        img-class="blurry"
        :native-context-menu="nativeContextMenu"
      >
        <div slot="loading" class="text-h2 text-white">
          Loading...
        </div>

        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>

      <q-img
        :src="url"
        placeholder-src="https://picsum.photos/500/300/?blur"
        :ratio="16/9"
        spinner-color="white"
        style="max-width: 400px"
        :native-context-menu="nativeContextMenu"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>

      <q-img
        :src="url"
        placeholder-src="https://picsum.photos/500/300/?blur"
        :ratio="16/9"
        spinner-color="white"
        style="max-width: 400px"
        transition="slide-left"
        :native-context-menu="nativeContextMenu"
      />

      <q-img
        :src="url"
        basic
        placeholder-src="https://picsum.photos/500/300/?blur"
        ratio="1"
        class="rounded-borders"
        style="max-width: 225px"
        :native-context-menu="nativeContextMenu"
      />

      <q-img
        :src="url"
        placeholder-src="https://picsum.photos/500/300/?blur"
        ratio="1"
        transition="slide-up"
        spinner-color="white"
        style="max-width: 225px"
        :native-context-menu="nativeContextMenu"
      >
        <q-spinner-facebook slot="loading" color="white" />
      </q-img>

      <q-img
        src="https://picsum.photos/300/300/"
        basic
        placeholder-src="https://picsum.photos/500/300/?blur"
        contain
        style="max-width: 400px; height: 200px"
        :native-context-menu="nativeContextMenu"
      >
        <div class="absolute-bottom text-body1 text-center">
          Contain
        </div>
      </q-img>
    </div>

    <div class="q-mt-lg">
      <q-btn label="Set null src" @click="bogusSrc = null" />
      <q-btn label="Set good src" @click="bogusSrc = 'https://placeimg.com/500/300/nature?t=' + Math.random()" />
      <q-btn label="Set bogus src" @click="bogusSrc = 'https://bogu.bogus'" />

      <q-img
        :src="bogusSrc"
        spinner-color="white"
        style="min-height: 100px; max-width: 225px"
        :native-context-menu="nativeContextMenu"
      >
        <div slot="error">
          Error...
        </div>
      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://placeimg.com/500/300/nature',
      bogusSrc: 'https://bogu.bogus',
      nativeContextMenu: false
    }
  },

  methods: {
    refresh () {
      this.url = 'https://placeimg.com/500/300/nature?t=' + Math.random()
    }
  }
}
</script>

<style lang="sass">
.blurry
  filter: blur(3px) sepia()
</style>
