<!-- 
- Adapted from https://codepen.io/johnmotyljr/pen/tkipE
-->
<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <div class="q-gutter-md">

<q-card flat class="flip transparent"
@mouseover="showActionsExample1 = true"
@mouseleave="showActionsExample1 = false"
>
    <div class="card" :class="{ 'flipped': showActionsExample1 }">
        <div class="face front bg-black text-white">
          <q-icon size="12em" name="mood_bad" />
        </div>
        <div class="face back bg-purple-5 text-white">
          <q-icon size="12em"  name="mood" />
        </div>
    </div>
</q-card>

    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      showActionsExample1: false,
    };
  },
};
</script>

<style scoped>
.flip {
    -webkit-perspective: 800;
    width: 400px;
    height: 200px;
    position: relative;
}
.flip .card.flipped {
    -webkit-transform: rotatex(-180deg);
}
.flip .card {
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    -webkit-transition: 0.5s;
}
.flip .card .face {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-backface-visibility: hidden;
    z-index: 2;
    text-align: center;
    line-height: 200px;
}
.flip .card .front {
    position: absolute;
    z-index: 1;
    cursor: pointer;
}
.flip .card .back {
    -webkit-transform: rotatex(-180deg);
    cursor: pointer;
}
</style>