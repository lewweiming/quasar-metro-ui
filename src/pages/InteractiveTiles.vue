<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
  <div class="q-mb-lg">
        <h5 class="text-white">Music Player (Static)</h5>
        <MusicPlayerStatic />
  </div>
  <div class="q-mb-lg">
        <h5 class="text-white">Music Player (Animated)</h5>
        <MusicPlayerAnimated />
  </div>
</q-page>
</template>

<script>
import MusicPlayerStatic from 'components/interactive-tiles/MusicPlayerStatic.vue'
import MusicPlayerAnimated from 'components/interactive-tiles/MusicPlayerAnimated.vue'
export default {
components: {
  MusicPlayerStatic,
  MusicPlayerAnimated
},
  data() {
    return {

    }
  }

}
</script>