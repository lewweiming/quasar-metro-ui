<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <div class="q-mb-lg">
      <h5 class="text-white">Fade</h5>
      <SlideFade />=
    </div>

    <div class="q-mb-lg">
      <h5 class="text-white">Slide (Horizontal)</h5>
      <SlideTile />
    </div>

    <div class="q-mb-lg">
      <h5 class="text-white">Slide (Vertical)</h5>
      <SlideTileVertical />
    </div>
  </q-page>
</template>

<script>
import SlideFade from 'components/live-tiles/SlideFade.vue'
import SlideTile from 'components/live-tiles/SlideTile.vue'
import SlideTileVertical from 'components/live-tiles/SlideTileVertical.vue'
export default {
  components: {
    SlideFade,
    SlideTile,
    SlideTileVertical
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.fade {
  animation: fade 12s linear 0s infinite;
}

.element {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.element:nth-child(2) {
  z-index: 2;
  animation-delay: 4s;
}

.element:nth-child(3) {
  z-index: 1;
  animation-delay: 8s;
}

@keyframes fade {
  25% {
    opacity: 1;
  }
  33.33% {
    opacity: 0;
  }
  91.66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
