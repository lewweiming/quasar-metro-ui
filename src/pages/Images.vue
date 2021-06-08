<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
    <div class="q-gutter-md">
      <!-- Example 1 -->
      <div class="q-mb-lg">
        <h5 class="text-white">Single Card</h5>

        <q-card dark class="bg-purple-8" style="width: 500px">
          <q-img
            src="https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          >
            <div class="absolute-bottom">
              <div class="text-h6">One Planet, One Earth</div>
              <div class="text-subtitle2">by Kevin</div>
            </div>
          </q-img>
        </q-card>
      </div>

      <div class="q-mb-lg">
        <h5 class="text-white">Single Card Without Caption</h5>

        <q-card dark class="bg-purple-8" style="width: 300px">
          <q-img
            src="https://images.pexels.com/photos/2868441/pexels-photo-2868441.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </q-card>
      </div>

      <!-- Example 3 -->
      <div class="q-mb-lg">
        <h5 class="text-white">Grid</h5>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <div class="q-gutter-md">
            <q-card dark class="bg-purple-8">
              <q-img
                src="https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              >
                <div class="absolute-bottom">
                  <div class="text-h6">One Planet, One Earth</div>
                  <div class="text-subtitle2">by Kevin</div>
                </div>
              </q-img>
            </q-card>
            <q-card dark class="bg-purple-8">
              <q-img
                src="https://images.pexels.com/photos/2868441/pexels-photo-2868441.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
            </q-card>
          </div>
        </div>
        <!-- Pay attention to the column class added which fixes a very stubborn problem -->
        <div class="col-6 column">
          <q-card dark class="bg-purple-8 full-height">
            <q-img
              height="100%"
              src="https://images.pexels.com/photos/2738653/pexels-photo-2738653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            >
              <div class="absolute-bottom">
                <div class="text-h6">Waterfalls</div>
                <div class="text-subtitle2">by Joshua</div>
              </div>
            </q-img>
          </q-card>
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