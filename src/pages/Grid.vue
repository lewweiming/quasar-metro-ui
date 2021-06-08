<!-- 
For complex grid patterns: 
- Refer to https://tailwindcss.com/docs/grid-column
- Use grid-column css
-->

<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <div class="q-mb-lg">
      <h5 class="text-white">Basic Grid</h5>

      <div class="row q-col-gutter-md">
        <div class="col-6">
          <div class="q-gutter-md">
            <q-card dark class="bg-purple-8">
              <q-card-section class="text-center">
                <q-avatar square size="100px">A</q-avatar>
              </q-card-section>
            </q-card>
            <q-card dark class="bg-purple-8">
              <q-card-section class="text-center">
                <q-avatar square size="100px">B</q-avatar>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-6">
          <q-card dark class="bg-purple-8 full-height">
            <q-card-section
              class="text-center full-height row items-center justify-center"
            >
              <q-avatar square size="100px">C</q-avatar>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="q-mb-lg">
      <h5 class="text-white">Grid Template</h5>
    <div class="grid grid-rows-3 grid-flow-col gap-4" style="height: 500px;">
      <div class="row-span-3">
        <div class="text-white bg-purple-3 full-height flex items-center justify-center">
        1
        </div>
      </div>
      <div class="col-span-2">
        <div class="text-white bg-purple-4 full-height flex items-center justify-center">
        2
        </div>
        </div>
      <div class="row-span-2 col-span-2">
        <div class="text-white bg-purple-5 full-height flex items-center justify-center">
        3
        </div>
        </div>
    </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.grid {
display: grid;
}

.grid-rows-3 {
grid-template-rows: repeat(3, minmax(0, 1fr));
}

.grid-flow-col {
grid-auto-flow: column;
}

.gap-4 {
gap: 1rem;
}

.row-span-2 {
  grid-row: span 2 / span 2;
}

.row-span-3 {
  grid-row: span 3 / span 3;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}
</style>
