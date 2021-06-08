<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <div class="q-gutter-md">
      <!-- Example 1 -->
      <q-card
        @mouseover="showActionsExample1 = true"
        @mouseleave="showActionsExample1 = false"
        dark
        class="grow cursor-pointer bg-purple-8"
        style="width: 200px"
      >
        <q-card-section class="text-center">
          <q-icon size="10em" name="home" />

          <div class="absolute-bottom q-ma-sm text-left">
            <transition
              appear
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
            >
              <div v-if="showActionsExample1">Home</div>
            </transition>
          </div>
        </q-card-section>
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
/* 
- Abstracted from https://css-tricks.com/snippets/css/scale-on-hover-with-webkit-transition/
*/
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.1); }
</style>
