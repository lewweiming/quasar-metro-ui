<template>
<!-- Dark style -->
<q-page class="q-pa-lg bg-grey-10">
    <!-- Example 1 -->
      <q-card dark class="bg-purple-8" style="width: 300px">

        <q-card-section class="text-center">
          <q-circular-progress
      show-value
      font-size="70px"
      :value="75"
      size="200px"
      :thickness="0.05"
      color="white"
      track-color="purple-2"
      class="q-ma-md"
    >
      <div class="text-weight-thin">75%</div>
    </q-circular-progress>
    <div class="absolute-bottom text-left">
        <div class="q-ma-sm">
            <div class="text-weight-light">Downloading</div>
            <div class="text-subtitle2">ebook.pdf</div>
        </div>
        </div>
        </q-card-section>
        <q-card-section class="q-pa-none bg-purple-9">
          <q-item>
            <q-item-section>
              Go to Downloads
            </q-item-section>
            <q-item-section avatar>
              
              <q-icon color="white" name="play_circle_outline" />
              
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
</q-page>
</template>

<script>
export default {

  data() {
    return {

    }
  }

}
</script>