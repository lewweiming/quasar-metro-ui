<!--
- Adapted from https://codepen.io/keithpickering/details/YPMEKp
-->

<template>
  <q-card dark style="width: 300px;">
    <div class="bg-image"></div>

    <div class="absolute-top q-ma-lg">
      <div class="text-grey-7 text-bold text-uppercase">Now Playing</div>
      <div class="text-h5 text-weight-light">All Night</div>
      <div class="text-subtitle2 text-weight-light">Girls Generation</div>
    </div>
    <div class="absolute-bottom q-ma-lg">
      <div>
        <q-btn flat icon="skip_previous" />
        <q-btn flat icon="pause" />
        <q-btn flat icon="skip_next" />
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.bg-image {
  height: 300px;
  mix-blend-mode: overlay;
  background-color: black;
  background: url("~assets/samples/gg.jpg");
  background-size: cover;
}
</style>